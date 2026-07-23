"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "../data/posts";

const CATEGORIES = [
  "All",
  "Respiratory & Sinus",
  "Women's Health & PCOS",
  "Skin & Hair",
  "Digestive Care",
  "General Wellness",
] as const;

interface BlogsPageClientProps {
  initialPosts: BlogPost[];
}

export default function BlogsPageClient({ initialPosts }: BlogsPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Dynamic search and filter logic
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  // Featured post is the first matching post of the filtered list
  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  const handleReset = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="w-full bg-background pb-16 sm:pb-24">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/8 via-primary/3 to-background px-4 py-16 text-center sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Homoeopathy & General Wellness Insights
          </span>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Health Insights & Homoeopathic Care
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover clinical guides, patient resources, and constitutional homoeopathy articles written by Dr. S. Dhanalakshmi, M.D. to help you heal naturally.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative flex items-center rounded-full border border-border bg-card px-4 py-2 shadow-sm ring-primary/20 transition-all focus-within:border-primary focus-within:ring-4">
              <Search className="size-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Search conditions, remedies, or health topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="ml-2 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="rounded-full p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  aria-label="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Conditions / Category Filter Pills */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="scrollbar-none -mx-4 flex overflow-x-auto px-4 py-3 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-2 sm:px-0">
          <div className="flex gap-2 whitespace-nowrap">
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer select-none border ${
                    isActive
                      ? "bg-primary border-primary text-primary-foreground shadow-md shadow-primary/10"
                      : "bg-card border-border/80 text-muted-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        {filteredPosts.length === 0 ? (
          /* Empty State */
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card py-16 text-center">
            <div className="inline-flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Search className="size-6" />
            </div>
            <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
              No Articles Found
            </h3>
            <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground">
              We couldn't find any articles matching "{searchQuery}" in "{selectedCategory}".
            </p>
            <Button onClick={handleReset} className="mt-6 font-semibold" variant="outline">
              Clear Filters & Search
            </Button>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Featured Article Banner */}
            {featuredPost && (
              <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:shadow-lg group/featured">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Banner Cover Image (LCP Candidate) */}
                  <div className="relative aspect-[16/10] w-full lg:col-span-7 lg:aspect-auto lg:h-[400px]">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      priority // Next.js priority maps to fetchpriority="high"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />
                  </div>

                  {/* Banner Content */}
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                    <div className="space-y-4">
                      <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-primary">
                        {featuredPost.category}
                      </span>
                      <h2 className="font-heading text-2xl font-bold leading-snug text-foreground sm:text-3xl group-hover/featured:text-primary transition-colors">
                        {/* Full-card overlay — makes the entire banner clickable */}
                        <Link
                          href={`/blogs/${featuredPost.slug}`}
                          className="after:absolute after:inset-0 after:z-0 focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-primary/60"
                        >
                          {featuredPost.title}
                        </Link>
                      </h2>
                      <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {featuredPost.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border/50">
                      {/* Meta Details */}
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="size-3.5" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="size-3.5" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>

                      {/* Author */}
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative size-8 overflow-hidden rounded-full border border-border bg-muted">
                          <Image
                            src={featuredPost.author.avatar}
                            alt={featuredPost.author.name}
                            fill
                            sizes="32px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground">
                            {featuredPost.author.name}
                          </p>
                          <p className="text-[10px] text-muted-foreground">
                            {featuredPost.author.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Articles Grid */}
            {gridPosts.length > 0 && (
              <div className="space-y-6">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  More Articles & Condition Guides
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {gridPosts.map((post) => (
                    <Card
                      key={post.slug}
                      className="group relative overflow-hidden border border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      {/* Card Cover Image */}
                      <div className="relative aspect-video w-full bg-muted">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          loading="lazy" // standard below-the-fold image lazy loaded
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-102"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-block rounded-full bg-background/90 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-bold tracking-wide text-primary shadow-xs">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <CardContent className="flex flex-1 flex-col justify-between p-5">
                        <div className="space-y-2">
                          <h4 className="font-heading text-lg font-semibold leading-snug text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {/* Full-card overlay link — entire card surface is now the click target */}
                            <Link
                              href={`/blogs/${post.slug}`}
                              className="after:absolute after:inset-0 after:z-0 focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-primary/60"
                            >
                              {post.title}
                            </Link>
                          </h4>
                          <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                            {post.summary}
                          </p>
                        </div>

                        {/* Single unified footer row */}
                        <div className="mt-5 flex items-center justify-between gap-3 border-t border-border/40 pt-4">
                          {/* Author */}
                          <div className="flex items-center gap-1.5 min-w-0">
                            <div className="relative size-6 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
                              <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                fill
                                sizes="24px"
                                className="object-cover"
                              />
                            </div>
                            <span className="truncate text-[11px] font-medium text-foreground">
                              {post.author.name}
                            </span>
                          </div>

                          {/* Date · Read time */}
                          <div className="flex shrink-0 items-center gap-3 text-[11px] text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="size-3" />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="size-3" />
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
