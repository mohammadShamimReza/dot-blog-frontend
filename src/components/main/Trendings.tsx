import { useBlogQuery } from "@/redux/api/blogApi";
import { IBlog } from "@/types";
import Link from "next/link";

function Trendings() {
  const { data: trendingBlogs } = useBlogQuery({ page: 1, limit: 3 });
  const trendingBlog = trendingBlogs?.data;

  return (
    <div className="flex flex-col items-center ">
      <div className="my-4 w-full max-w-xl">
        <p className="text-center text-xl font-semibold py-10">
          Trending Blogs
        </p>
        {trendingBlog?.data?.map((blog: IBlog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <div className="mb-4 hover:shadow-lg border rounded-lg dark:shadow-white">
              <div className="p-4">
                <p className="font-bold text-lg truncate">{blog.title}</p>
                <div className="mt-2 isDarkMode dark:text-gray-300 line-clamp-5  w-44">
                  {blog?.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog.content,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Trendings;
