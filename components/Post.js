import Link from "next/link";
export default function Post ({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-gray-500 border-b border-gray-500 hover:bg-red-200">
          {post.title}
        </span>
      </Link>
    </div>
  );
}
