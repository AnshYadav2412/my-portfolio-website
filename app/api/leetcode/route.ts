import { NextResponse } from "next/server";

import { dsaStats, DsaStatsInterface } from "@/config/dsa";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export interface LeetCodeApiResponse extends DsaStatsInterface {
  updatedAt: string;
  isLive: boolean;
  source: string;
}

const LEETCODE_USERNAME = "2412anshyadav";

async function fetchFromLeetCodeGraphQL(): Promise<Partial<DsaStatsInterface> | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4500);

  try {
    const query = JSON.stringify({
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
            languageProblemCount {
              languageName
              problemsSolved
            }
          }
          userContestRanking(username: $username) {
            rating
            globalRanking
            totalParticipants
            topPercentage
          }
        }
      `,
      variables: { username: LEETCODE_USERNAME },
    });

    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: query,
      cache: "no-store",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    const matchedUser = json?.data?.matchedUser;
    const contest = json?.data?.userContestRanking;

    if (!matchedUser) {
      return null;
    }

    const subs = matchedUser.submitStatsGlobal?.acSubmissionNum || [];
    const all = subs.find((s: any) => s.difficulty === "All")?.count;
    const easy = subs.find((s: any) => s.difficulty === "Easy")?.count;
    const medium = subs.find((s: any) => s.difficulty === "Medium")?.count;
    const hard = subs.find((s: any) => s.difficulty === "Hard")?.count;

    const langs = matchedUser.languageProblemCount || [];
    const topLang = langs.length > 0 ? langs[0] : null;

    return {
      totalSolved: typeof all === "number" ? all : dsaStats.totalSolved,
      easy: { solved: typeof easy === "number" ? easy : dsaStats.easy.solved },
      medium: { solved: typeof medium === "number" ? medium : dsaStats.medium.solved },
      hard: { solved: typeof hard === "number" ? hard : dsaStats.hard.solved },
      contestRating:
        contest?.rating != null ? Math.round(contest.rating) : dsaStats.contestRating,
      topPercentage:
        contest?.topPercentage != null
          ? Number(contest.topPercentage.toFixed(2))
          : dsaStats.topPercentage,
      globalContestRank:
        contest?.globalRanking != null
          ? contest.globalRanking
          : dsaStats.globalContestRank,
      totalParticipants:
        contest?.totalParticipants != null
          ? contest.totalParticipants
          : dsaStats.totalParticipants,
      primaryLanguage: topLang?.languageName || dsaStats.primaryLanguage,
      languageSolvedCount:
        topLang?.problemsSolved != null
          ? topLang.problemsSolved
          : dsaStats.languageSolvedCount,
    };
  } catch {
    clearTimeout(timeoutId);
    return null;
  }
}

async function fetchFromFallback(): Promise<Partial<DsaStatsInterface> | null> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 4500);

  try {
    const res = await fetch(
      `https://alfa-leetcode-api.onrender.com/userProfile/${LEETCODE_USERNAME}`,
      {
        cache: "no-store",
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    if (!data || typeof data.totalSolved !== "number") {
      return null;
    }

    return {
      totalSolved: data.totalSolved,
      easy: { solved: data.easySolved ?? dsaStats.easy.solved },
      medium: { solved: data.mediumSolved ?? dsaStats.medium.solved },
      hard: { solved: data.hardSolved ?? dsaStats.hard.solved },
    };
  } catch {
    clearTimeout(timeoutId);
    return null;
  }
}

export async function GET() {
  let stats: DsaStatsInterface = { ...dsaStats };
  let isLive = false;
  let source = "static";

  // 1. Try official LeetCode GraphQL
  const graphQLStats = await fetchFromLeetCodeGraphQL();
  if (graphQLStats) {
    stats = { ...stats, ...graphQLStats };
    isLive = true;
    source = "leetcode-graphql";
  } else {
    // 2. Try Fallback API
    const fallbackStats = await fetchFromFallback();
    if (fallbackStats) {
      stats = { ...stats, ...fallbackStats };
      isLive = true;
      source = "alfa-api";
    }
  }

  const responsePayload: LeetCodeApiResponse = {
    ...stats,
    updatedAt: new Date().toISOString(),
    isLive,
    source,
  };

  return NextResponse.json(responsePayload, {
    headers: {
      "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0",
      "CDN-Cache-Control": "no-store",
      "Vercel-CDN-Cache-Control": "no-store",
    },
  });
}
