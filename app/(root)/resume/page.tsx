import { Metadata } from "next";
import Link from "next/link";

import { Icons } from "@/components/common/icons";
import PageContainer from "@/components/common/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pagesConfig } from "@/config/pages";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: pagesConfig.resume.metadata.title,
  description: pagesConfig.resume.metadata.description,
};

export default function ResumePage() {
  return (
    <PageContainer
      title={pagesConfig.resume.title}
      description="View and download my official curriculum vitae and academic track record."
    >
      <div className="space-y-6 max-w-5xl mx-auto w-full">
        {/* Quick Action Toolbar */}
        <Card className="border bg-background p-4 sm:p-6">
          <CardContent className="p-0 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-heading font-bold text-foreground">
                Ansh Kumar Yadav
              </h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                B.Tech in Engineering &amp; Computational Mechanics · NIT Jamshedpur (&apos;28) · CGPA: 7.51
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="/resume.pdf"
                download="Ansh_Kumar_Yadav_Resume.pdf"
                className={cn(buttonVariants({ variant: "outline" }), "flex-1 sm:flex-initial rounded-lg")}
              >
                <Icons.post className="mr-2 h-4 w-4" />
                Download PDF
              </a>

              <Link
                href={siteConfig.links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "default" }), "flex-1 sm:flex-initial rounded-lg")}
              >
                <Icons.externalLink className="mr-2 h-4 w-4" />
                Open on Google Drive
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Embedded PDF Viewer */}
        <div className="w-full rounded-xl border bg-muted overflow-hidden shadow-sm">
          <iframe
            src="/resume.pdf#toolbar=0"
            title="Ansh Kumar Yadav Resume"
            className="w-full h-[750px] sm:h-[900px] border-0"
          />
        </div>
      </div>
    </PageContainer>
  );
}
