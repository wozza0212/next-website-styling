import Link from "next/link";
import Image from "next/legacy/image";
import { FunctionComponent } from "react";
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
    <div className="group border rounded-lg p-4 bg-gray-100 h-100 hover:bg-gray-300 transition duration-300 ease-in-out">
      <Link href={`/blog/${post.slug}`}>
        <div
          key={index}
          className="h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40"
        >
          <div className="relative h-80 aspect-w-1 aspect-h-1 w-full rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-40">
            <Image
              src={post.image}
              alt={post.title}
              style={{ objectFit: "cover" }}
              fill
              className="rounded-lg hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h2 className="text-lg text-black font-bold h-20">{post.title}</h2>
            <h2 className="text-sm text-white font-bold h-0.5">
              {post.author}
            </h2>
            <p className="mt-1 text-md text-gray-900">{post.date}</p>
            <p className="mt-1 text-md text-gray-900 line-clamp-3">
              {post.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
