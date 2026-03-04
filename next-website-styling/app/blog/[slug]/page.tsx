import { Metadata, NextPage } from "next/types";
import { getAllBlogSlugs, getBlogBySlugWithMarkdown } from "../../../lib/blogs";
import { Blog } from "../../../interfaces/Blog";
// import BaseLayout from "@/components/Layouts/base-layout";

export const generateStaticParams = async () => {
  const slugs = getAllBlogSlugs();
  console.log("All Slugs:", slugs); // Debugging line to check the slugs
  return slugs.map((slug) => ({
    params: { slug },
  }));
};

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: "Blog Detail Page",
  description: "By Wozza",
};

const BlogDetail: NextPage<BlogDetailProps> = async ({ params }) => {
  const { slug } = params;
  const blog: Blog = await getBlogBySlugWithMarkdown(slug);
  return (
    // <BaseLayout>
    <div className="w-2/3 m-auto">
      <article className={`prose lg:prose-lg markdown-image-50`}>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </div>
    // {/* </BaseLayout> */}
  );
};

export default BlogDetail;
