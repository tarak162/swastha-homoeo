"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href.startsWith("/#")) return pathname === "/" && false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:h-16 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          <Image
            src="/swastha/swastha-just-logo-removebg.png"
            alt=""
            width={36}
            height={36}
            sizes="36px"
            className="size-8 sm:size-9"
            decoding="async"
          />
          <span className="hidden min-[380px]:inline">{siteConfig.name}</span>
          <span className="min-[380px]:hidden">{siteConfig.shortName}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                isActive(pathname, item.href) && "bg-muted text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex">
            <a href={`tel:${siteConfig.phoneTel}`}>Call</a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 pt-2" aria-label="Mobile main">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
                      isActive(pathname, item.href) && "bg-muted text-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <p className="mt-4 text-xs text-muted-foreground">{siteConfig.hours}</p>
              <a
                className="text-sm font-medium text-primary hover:underline"
                href={`tel:${siteConfig.phoneTel}`}
              >
                {siteConfig.phone}
              </a>
            </SheetContent>
          </Sheet>
        </div>

        <Button variant="default" size="sm" asChild className="hidden lg:inline-flex">
          <a href="/book">Book an Appointment</a>
        </Button>
      </div>
    </header>
  );
}
