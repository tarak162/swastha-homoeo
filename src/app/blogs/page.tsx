import type { Metadata } from "next";

import BlogsPageClient from "./components/blogs-page-client";
import { BLOG_POSTS } from "./data/posts";

export const metadata: Metadata = {
  title: "Health Insights & Homoeopathic Care | Blogs & Conditions Directory",
  description:
    "Read health guides, patient resources, and constitutional homoeopathy articles written by Dr. S. Dhanalakshmi, M.D. Swastha Homoeopathy, BHEL, Hyderabad.",
  alternates: {
    canonical: "https://www.swasthahomoeo.com/blogs",
  },
  openGraph: {
    title: "Health Insights & Homoeopathic Care | Swastha Homoeopathy",
    description:
      "Read health guides, patient resources, and constitutional homoeopathy articles written by Dr. S. Dhanalakshmi, M.D. Swastha Homoeopathy, BHEL, Hyderabad.",
    url: "https://www.swasthahomoeo.com/blogs",
    type: "website",
  },
};

export default function BlogsPage() {
  return <BlogsPageClient initialPosts={BLOG_POSTS} />;
}
