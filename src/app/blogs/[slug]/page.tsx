import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  ChevronRight,
  Clock,
  Heart,
  Home,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BLOG_POSTS } from "../data/posts";
import ShareButtons from "../components/ShareButtons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all posts to optimize build-time SSG
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

// Dynamic SEO Metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Swastha Homoeopathy",
    };
  }

  return {
    title: `${post.title} | Swastha Homoeopathy`,
    description: post.summary,
    alternates: {
      canonical: `https://www.swasthahomoeo.com/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      url: `https://www.swasthahomoeo.com/blogs/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: `https://www.swasthahomoeo.com${post.coverImage}`,
          width: 800,
          height: 600,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Find related articles (either specified or matching category)
  const relatedPosts = BLOG_POSTS.filter((p) => {
    if (p.slug === post.slug) return false;
    return post.relatedSlugs.includes(p.slug) || p.category === post.category;
  }).slice(0, 2);

  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-24">
      {/* Article Header Banner */}
      <div className="relative bg-gradient-to-b from-primary/8 via-primary/2 to-background py-8 sm:py-12 border-b border-border/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-0.5">
              <Home className="size-3" />
              <span>Home</span>
            </Link>
            <ChevronRight className="size-3 shrink-0" />
            <Link href="/blogs" className="hover:text-primary transition-colors">
              Blogs
            </Link>
            <ChevronRight className="size-3 shrink-0" />
            <span className="text-primary/80 font-medium truncate max-w-[150px] sm:max-w-[300px]">
              {post.category}
            </span>
            <ChevronRight className="size-3 shrink-0 hidden sm:inline" />
            <span className="hidden sm:inline text-muted-foreground truncate max-w-[200px]">
              {post.title}
            </span>
          </nav>

          {/* Quick Back Button */}
          <div className="mt-6">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="size-3.5" /> Back to all articles
            </Link>
          </div>

          {/* Title & Author Info */}
          <div className="mt-6 max-w-4xl">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {post.category}
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-border/50 pt-6">
              {/* Doctor Avatar Credit */}
              <div className="flex items-center gap-2.5">
                <div className="relative size-10 overflow-hidden rounded-full border border-border bg-muted">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">
                    Written by {post.author.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{post.author.role}</p>
                </div>
              </div>

              {/* Meta Date & Time */}
              <div className="flex items-center gap-4 border-l border-border/60 pl-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Quick compact share row in the header */}
              <div className="ml-auto border-l border-border/60 pl-6">
                <ShareButtons
                  title={post.title}
                  url={`https://www.swasthahomoeo.com/blogs/${post.slug}`}
                  variant="compact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout Container */}
      <div className="mx-auto mt-10 max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Main Article Content (70%) */}
          <article className="lg:col-span-8 space-y-8">
            {/* Featured Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border/40 bg-muted">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority // LCP candidate image
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover"
              />
            </div>

            {/* Styled HTML Body */}
            <div
              className="blog-content text-base sm:text-[1.05rem] leading-relaxed text-foreground/80 space-y-6 
                [&_p]:mb-4 [&_p]:leading-relaxed
                [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight
                [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3
                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-3 [&_ul]:my-5
                [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Doctor's Tip Callout Box */}
            <div className="rounded-xl border-l-4 border-primary bg-primary/4 p-5 sm:p-6 shadow-xs">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-primary/10 p-1.5 text-primary">
                  <Stethoscope className="size-5" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-foreground">
                    Doctor's Advice
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80 font-medium italic">
                    "{post.doctorsTip}"
                  </p>
                </div>
              </div>
            </div>

            {/* ── Share Bar ───────────────────────────────────────────── */}
            <div className="rounded-xl border border-border/50 bg-card/60 p-4 sm:p-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Found this helpful? Share with a loved one.
              </p>
              <ShareButtons
                title={post.title}
                url={`https://www.swasthahomoeo.com/blogs/${post.slug}`}
                variant="full"
              />
            </div>

            {/* Related Articles Section */}
            {relatedPosts.length > 0 && (
              <div className="border-t border-border/50 pt-10 mt-12 space-y-6">
                <h3 className="font-heading text-lg font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="size-4 text-primary" /> Related Condition Guides
                </h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {relatedPosts.map((related) => (
                    <Card
                      key={related.slug}
                      className="group relative overflow-hidden border border-border/40 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      <div className="relative aspect-video w-full bg-muted">
                        <Image
                          src={related.coverImage}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 35vw"
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <span className="inline-block rounded-full bg-primary/8 px-2 py-0.5 text-[9px] font-bold text-primary">
                          {related.category}
                        </span>
                        <h4 className="mt-2 font-heading text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {/* Full-card overlay — entire card surface is the click target */}
                          <Link
                            href={`/blogs/${related.slug}`}
                            className="after:absolute after:inset-0 after:z-0 focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-primary/60"
                          >
                            {related.title}
                          </Link>
                        </h4>

                        {/* Single unified footer row */}
                        <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/40 pt-3">
                          {/* Author */}
                          <div className="flex items-center gap-1.5 min-w-0">
                            <div className="relative size-5 shrink-0 overflow-hidden rounded-full border border-border bg-muted">
                              <Image
                                src={related.author.avatar}
                                alt={related.author.name}
                                fill
                                sizes="20px"
                                className="object-cover"
                              />
                            </div>
                            <span className="truncate text-[10px] font-medium text-foreground">
                              {related.author.name}
                            </span>
                          </div>

                          {/* Date · Read time */}
                          <div className="flex shrink-0 items-center gap-2.5 text-[10px] text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="size-2.5" />
                              {related.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="size-2.5" />
                              {related.readTime}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sticky Right Sidebar (30%) */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* High-Converting Consultation Card */}
              <Card className="overflow-hidden border border-primary/20 bg-card shadow-sm ring-1 ring-primary/5">
                {/* Visual Header */}
                <div className="bg-primary/8 p-5 text-center border-b border-primary/10">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary shadow-xs">
                    <Heart className="size-6 fill-primary/20" />
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-bold text-foreground">
                    Consult Dr. S. Dhanalakshmi
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    M.D. (Homoeopathy)
                  </p>
                </div>

                <CardContent className="p-6 space-y-5">
                  <p className="text-sm leading-relaxed text-foreground/80 text-center">
                    Seeking personalized care for <strong>{post.category}</strong> or related chronic conditions? Let's design a custom remedies chart tailored to your body's constitution.
                  </p>

                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-center gap-3 text-xs text-foreground/95">
                      <div className="rounded bg-muted p-1 text-primary">
                        <MapPin className="size-4" />
                      </div>
                      <span>Online & In-Clinic (BHEL, Hyderabad)</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-foreground/95">
                      <div className="rounded bg-muted p-1 text-primary">
                        <ShieldCheck className="size-4" />
                      </div>
                      <span>12+ Years Clinical Experience</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-foreground/95">
                      <div className="rounded bg-muted p-1 text-primary">
                        <Stethoscope className="size-4" />
                      </div>
                      <span>Root-Cause Constitutional Care</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button asChild className="w-full font-bold shadow-xs py-5" size="lg">
                      <Link href="/book">
                        Book Appointment
                      </Link>
                    </Button>
                  </div>

                  <p className="text-[10px] text-center text-muted-foreground">
                    Free follow-up case support included within active cycles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
