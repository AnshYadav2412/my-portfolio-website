"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dsaStats, DsaStatsInterface } from "@/config/dsa";

const formatNumber = (num?: number): string => {
  if (num == null) return "0";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function DsaStats() {
  const [stats, setStats] = useState<DsaStatsInterface>(dsaStats);

  const fetchLatestStats = async () => {
    try {
      const res = await fetch("/api/leetcode", {
        cache: "no-store",
        headers: {
          "Pragma": "no-cache",
          "Cache-Control": "no-cache",
        },
      });
      if (res.ok) {
        const data = await res.json();
        setStats((prev) => ({
          ...prev,
          totalSolved: data.totalSolved ?? prev.totalSolved,
          easy: { solved: data.easy?.solved ?? prev.easy.solved },
          medium: { solved: data.medium?.solved ?? prev.medium.solved },
          hard: { solved: data.hard?.solved ?? prev.hard.solved },
          contestRating: data.contestRating ?? prev.contestRating,
          topPercentage: data.topPercentage ?? prev.topPercentage,
          globalContestRank: data.globalContestRank ?? prev.globalContestRank,
          totalParticipants: data.totalParticipants ?? prev.totalParticipants,
          primaryLanguage: data.primaryLanguage ?? prev.primaryLanguage,
          languageSolvedCount: data.languageSolvedCount ?? prev.languageSolvedCount,
        }));
      }
    } catch {
      // In case of error, silently retain existing stats
    }
  };

  useEffect(() => {
    fetchLatestStats();
  }, []);

  const totalSolved = stats.totalSolved || 1;
  const easyPercent = Math.min(100, Math.round((stats.easy.solved / totalSolved) * 100));
  const mediumPercent = Math.min(100, Math.round((stats.medium.solved / totalSolved) * 100));
  const hardPercent = Math.min(100, Math.round((stats.hard.solved / totalSolved) * 100));

  return (
    <div className="space-y-6 max-w-5xl mx-auto w-full">
      {/* Key Metric Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Solved */}
        <Card className="border bg-background p-4 sm:p-5 transition-all hover:border-primary/40 hover:shadow-sm">
          <CardContent className="p-0 space-y-2">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs sm:text-sm font-medium">Total Solved</span>
              <Icons.code className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              {stats.totalSolved}
            </div>
            <p className="text-xs text-muted-foreground">Across Easy, Med &amp; Hard</p>
          </CardContent>
        </Card>

        {/* Contest Rating */}
        <Card className="border bg-background p-4 sm:p-5 transition-all hover:border-primary/40 hover:shadow-sm">
          <CardContent className="p-0 space-y-2">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs sm:text-sm font-medium">Contest Rating</span>
              <Icons.trophy className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              {stats.contestRating}
            </div>
            <p className="text-xs text-emerald-500 font-medium">
              Top {stats.topPercentage}% Globally
            </p>
          </CardContent>
        </Card>

        {/* Global Contest Rank */}
        <Card className="border bg-background p-4 sm:p-5 transition-all hover:border-primary/40 hover:shadow-sm">
          <CardContent className="p-0 space-y-2">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs sm:text-sm font-medium">Contest Rank</span>
              <Icons.target className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground" suppressHydrationWarning>
              #{formatNumber(stats.globalContestRank)}
            </div>
            <p className="text-xs text-muted-foreground" suppressHydrationWarning>
              of {formatNumber(stats.totalParticipants)} coders
            </p>
          </CardContent>
        </Card>

        {/* Primary Language */}
        <Card className="border bg-background p-4 sm:p-5 transition-all hover:border-primary/40 hover:shadow-sm">
          <CardContent className="p-0 space-y-2">
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-xs sm:text-sm font-medium">Language</span>
              <Icons.award className="w-4 h-4 text-primary" />
            </div>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-foreground">
              {stats.primaryLanguage}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats.languageSolvedCount} Problems (100%)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Difficulty Breakdown Panel */}
      <Card className="border bg-background p-6">
        <CardContent className="p-0 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Icons.leetcode className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground">
                  Problem Solving Breakdown
                </h3>
                <p className="text-xs text-muted-foreground">
                  LeetCode Handle: @{stats.username}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" asChild className="rounded-lg w-fit">
              <Link href={stats.profileUrl} target="_blank" rel="noopener noreferrer">
                <Icons.leetcode className="mr-2 h-4 w-4" />
                LeetCode Profile
                <Icons.externalLink className="ml-2 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          {/* Difficulty progress bars */}
          <div className="space-y-4">
            {/* Easy */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-emerald-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Easy
                </span>
                <span className="text-muted-foreground font-medium">
                  {stats.easy.solved}{" "}
                  <span className="text-xs text-muted-foreground/60">({easyPercent}%)</span>
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-emerald-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${easyPercent}%` }}
                />
              </div>
            </div>

            {/* Medium */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-amber-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Medium
                </span>
                <span className="text-muted-foreground font-medium">
                  {stats.medium.solved}{" "}
                  <span className="text-xs text-muted-foreground/60">({mediumPercent}%)</span>
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-amber-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${mediumPercent}%` }}
                />
              </div>
            </div>

            {/* Hard */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-rose-500 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Hard
                </span>
                <span className="text-muted-foreground font-medium">
                  {stats.hard.solved}{" "}
                  <span className="text-xs text-muted-foreground/60">({hardPercent}%)</span>
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-rose-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${hardPercent}%` }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

