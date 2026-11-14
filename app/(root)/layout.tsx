import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { SiteFooter } from "@/components/common/site-footer";
import { buttonVariants } from "@/components/ui/button";
import { routesConfig } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex items-center gap-3">
              <ModeToggle />
            </div>
          </MainNav>
          <nav className="flex items-center gap-3">
            <Link
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "hidden sm:inline-flex items-center gap-1.5 rounded-lg text-xs font-semibold"
              )}
            >
              <Icons.post className="w-3.5 h-3.5" />
              Resume
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
