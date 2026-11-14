import { Metadata } from "next";
import Link from "next/link";

import { AnimatedSection } from "@/components/common/animated-section";
import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import DsaStats from "@/components/dsa/dsa-stats";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dsaStats } from "@/config/dsa";
import { pagesConfig } from "@/config/pages";

export const metadata: Metadata = {
  title: pagesConfig.dsa.metadata.title,
  description: pagesConfig.dsa.metadata.description,
};

const algorithmicTopics = [
  {
    name: "Dynamic Programming",
    description: "1D/2D DP, Subsequences, Knapsack variants, DP on Grids, and State Optimization.",
    tag: "Core Focus",
  },
  {
    name: "Graph Theory & Trees",
    description: "BFS, DFS, Dijkstra, Topological Sort, Disjoint Set Union (DSU), and Binary Tree Traversals.",
    tag: "Advanced",
  },
  {
    name: "Two Pointers & Sliding Window",
    description: "Subarray optimization, string manipulation, and linear-time window scanning.",
    tag: "Proficient",
  },
  {
    name: "Binary Search",
    description: "Search space reduction, monotonic predicates, and binary search on answers.",
    tag: "Proficient",
  },
  {
    name: "Heaps & Greedy Algorithms",
    description: "Priority queue scheduling, interval scheduling, and greedy decision making.",
    tag: "Proficient",
  },
  {
    name: "Stack, Queue & Linked Lists",
    description: "Monotonic stacks, next greater elements, and pointer manipulation.",
    tag: "Core",
  },
];

export default function ProblemSolvingPage() {
  return (
    <PageContainer
      title={pagesConfig.dsa.title}
      description={pagesConfig.dsa.description}
    >
      <div className="space-y-12">
        {/* Core LeetCode Metrics & Breakdown */}
        <AnimatedSection direction="up" delay={0.1}>
          <DsaStats />
        </AnimatedSection>

        {/* Algorithmic Focus Areas */}
        <AnimatedSection direction="up" delay={0.2} className="space-y-6">
          <div className="border-t pt-8">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              Algorithmic Focus &amp; Patterns
            </h2>
            <p className="text-muted-foreground text-sm max-w-2xl mb-6">
              Strong foundation in fundamental data structures, design patterns, and asymptotic complexity analysis implemented primarily in modern C++.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {algorithmicTopics.map((topic, index) => (
                <Card
                  key={index}
                  className="border bg-background p-5 transition-all hover:border-primary/40 hover:shadow-sm"
                >
                  <CardContent className="p-0 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-heading font-bold text-base text-foreground">
                        {topic.name}
                      </h3>
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {topic.tag}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {topic.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Competitive Programming & Philosophy */}
        <AnimatedSection direction="up" delay={0.3}>
          <Card className="border bg-muted/40 p-6 sm:p-8 rounded-xl">
            <CardContent className="p-0 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <Icons.trophy className="w-5 h-5 text-amber-500" />
                  <span className="font-heading font-bold text-lg text-foreground">
                    Continuous Competitive Practice
                  </span>
                </div>
                <p className="text-sm text-muted-foreground max-w-xl">
                  Active contestant with a <strong>{dsaStats.contestRating}</strong> contest rating (Top {dsaStats.topPercentage}% worldwide). Committed to algorithmic efficiency, writing bug-free C++ code, and tackling challenging problems daily.
                </p>
              </div>

              <Button asChild size="lg" className="rounded-xl flex-shrink-0">
                <Link
                  href={dsaStats.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.leetcode className="mr-2 h-4 w-4" />
                  View Live Profile
                  <Icons.externalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </PageContainer>
  );
}

