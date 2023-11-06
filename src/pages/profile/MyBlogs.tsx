import { IBlog } from "@/types";
import Link from "next/link";

function MyBlogs({ blog }: { blog: IBlog }) {
  return (
    <Link href={`/blogs/${blog?.id}`}>
      <div className="m-3 hover:shadow rounded dark:shadow-white">
        <div className="max-w-sm  overflow-hidden border rounded-lg">
          <div className="px-6 py-4 h-60">
            <div className="font-bold text-xl mb-2">{blog?.title}</div>
            {blog?.content && (
              <div
                dangerouslySetInnerHTML={{
                  __html: blog.content.split(" ").slice(0, 20).join(" "),
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MyBlogs;
