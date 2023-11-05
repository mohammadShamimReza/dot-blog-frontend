import { useBlogQuery } from "@/redux/api/blogApi";
import { IBlog } from "@/types";
import Link from "next/link";

function Trendings() {
  const { data: trendingBlogs } = useBlogQuery({ page: 1, limit: 3 });
  const trendingBlog = trendingBlogs?.data;

  console.log(trendingBlog);

  return (
    <div>
      <br />
      <hr />
      <p className="py-10 text-center text-xl font-semibold">Treinding Blogs</p>

      <hr />
      {trendingBlog?.map((blog: IBlog) => (
        <div key={blog.id} className="">
          {" "}
          <Link href={`/blogs/${blog.id}`}>
            <div className="m-3 hover:shadow-lg border rounded-lg dark:shadow-white">
              <div className="max-w-sm  overflow-hidden  ">
                <div className="px-6 py-4 h-60">
                  <div className="font-bold text-base mb-2">
                    {blog.title.split(" ").slice(0, 5).join(" ")}...
                  </div>
                  <hr />
                  {blog?.content && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog.content.split(" ").slice(0, 8).join(" "),
                      }}
                    />
                  )}
                  ...
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Trendings;
