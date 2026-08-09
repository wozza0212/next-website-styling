import { NextPage } from "next";
import BlogItem from "./blog-item";
import { getBlogs } from "../../lib/blogs";
import { Blog } from "../../interfaces/Blog";
import styles from "./blog-list.module.css";

type BlogPageProps = {
  blogs: Blog[];
  layout: "standard" | "compact";
};

export const fetchBlogs = async (): Promise<object> => {
  const blogs = getBlogs();
  console.log(blogs);

  return {
    props: { blogs },
  };
};

const BlogList: NextPage<BlogPageProps> = async ({ blogs, layout }) => {
  return (
    <div className={styles[layout]}>
      <div className={styles.blogListContainer}>
        {blogs.map((post: Blog, index: number) => (
          <BlogItem post={post} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
