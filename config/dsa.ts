export interface DsaStatsInterface {
  platform: string;
  username: string;
  profileUrl: string;
  totalSolved: number;
  totalQuestions: number;
  easy: {
    solved: number;
  };
  medium: {
    solved: number;
  };
  hard: {
    solved: number;
  };
  contestRating: number;
  topPercentage: number;
  globalContestRank: number;
  totalParticipants: number;
  primaryLanguage: string;
  languageSolvedCount: number;
}

export const dsaStats: DsaStatsInterface = {
  platform: "LeetCode",
  username: "2412anshyadav",
  profileUrl: "https://leetcode.com/u/2412anshyadav/",
  totalSolved: 488,
  totalQuestions: 3400,
  easy: {
    solved: 118,
  },
  medium: {
    solved: 321,
  },
  hard: {
    solved: 49,
  },
  contestRating: 1803,
  topPercentage: 8.32,
  globalContestRank: 72710,
  totalParticipants: 892590,
  primaryLanguage: "C++",
  languageSolvedCount: 488,
};

