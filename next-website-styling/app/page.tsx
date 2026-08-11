import HeroSection from "@/components/Hero/Hero";
import BlogList from "@/components/Blog/BlogList/blog-list";
import { getBlogs } from "@/lib/blogs";

export default function Home() {
  const blogs = getBlogs(3);
  return (
    <div>
      <HeroSection />
      <BlogList blogs={blogs} layout="compact" />
    </div>
  );
}
