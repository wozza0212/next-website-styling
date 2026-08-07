import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";
import styles from "./blog-item.module.css";
type Props = {
  post: BlogPost;
  index: number;
};

type BlogPost = {
  title: string;
  author: string;
  description: string;
  date: string;
  image: string;
  slug: string;
};

const BlogItem: FunctionComponent<Props> = (props: Props) => {
  const { post, index } = props;
  return (
    <div className={styles.blogItemContainer}>
      <Link href={`/blog/${post.slug}`}>
        <div key={index} className={styles.allContent}>
          <div className={styles.blogImageContainer}>
            <Image
              className={styles.blogImage}
              src={post.image}
              alt={post.title}
              loading="eager"
              width={180}
              height={180}
            />
          </div>
          <div></div>
          <div className={styles.blogContent}>
            <h4 className={styles.blogTitle}>{post.title}</h4>
            <p className={styles.blogDate}>{post.date}</p>
            <p className={styles.blogDescription}>{post.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
