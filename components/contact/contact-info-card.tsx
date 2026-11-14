"use client";

import Link from "next/link";
import React from "react";

import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function ContactInfoCard() {
  const [copied, setCopied] = React.useState(false);
  const emailAddress = "2412anshyadav@gmail.com";
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialItems = [
    {
      name: "GitHub",
      handle: "@AnshYadav2412",
      icon: Icons.gitHub,
      href: siteConfig.links.github,
    },
    {
      name: "LinkedIn",
      handle: "anshyadav2412",
      icon: Icons.linkedin,
      href: siteConfig.links.linkedin,
    },
    {
      name: "LeetCode",
      handle: "2412anshyadav",
      icon: Icons.leetcode,
      href: siteConfig.links.leetcode,
    },
  ];

  return (
    <Card className="w-full max-w-md border bg-background overflow-hidden shadow-sm hover:border-primary/40 transition-all duration-300">
      <CardContent className="p-6 sm:p-8 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Let&apos;s Connect
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed">
            Interested in collaborating on full-stack web applications, AI integrations, or exploring opportunities? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Quick Contact Info */}
        <div className="space-y-3.5 pt-2 border-t">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5 flex-shrink-0">
              <Icons.gmail className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs text-muted-foreground font-medium">Direct Email</p>
              <div className="flex items-center gap-2 mt-0.5">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors truncate"
                  title="Open in Gmail"
                >
                  {emailAddress}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] text-muted-foreground hover:text-foreground px-1.5 py-0.5 rounded border bg-muted/40 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Icons.check className="w-3 h-3 text-emerald-500" />
                      <span className="text-emerald-500 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Icons.copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary mt-0.5 flex-shrink-0">
              <Icons.gitOrgBuilding className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground font-medium">Institution</p>
              <p className="text-sm font-semibold text-foreground">
                National Institute of Technology, Jamshedpur
              </p>
              <p className="text-xs text-muted-foreground">Jharkhand, India</p>
            </div>
          </div>
        </div>

        {/* Social Quick Profiles */}
        <div className="space-y-2.5 pt-2 border-t">
          <p className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
            Online Presence
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {socialItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg border bg-muted/30 hover:bg-muted hover:border-primary/40 transition-colors text-xs font-medium text-foreground"
              >
                <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }), "flex-1 rounded-lg text-sm")}
          >
            <Icons.gmail className="w-4 h-4 mr-2" />
            Send Email
          </a>
          <Link
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "flex-1 rounded-lg text-sm")}
          >
            <Icons.externalLink className="w-4 h-4 mr-2" />
            Resume
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
