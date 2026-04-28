import { title } from "process";
import { getAllBlogSlugs, getBlogs } from "../../../lib/blogs";

const slugs = getAllBlogSlugs();
const blogs = getBlogs();

const blogLinks = [{ title: "All Blogs", href: "/blog" }];
for (let i = 0; i < 4; i++) {
  blogLinks.push({
    title: `${blogs[i].title}`,
    href: `/blog/${blogs[i].slug}`,
  });
}

const headerTabs = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
    multiLinks: blogLinks,
  },
  {
    title: "Contact",
    href: "/contact",
  },
  { title: "GitHub", href: "https://github.com" },
];
export default headerTabs;
