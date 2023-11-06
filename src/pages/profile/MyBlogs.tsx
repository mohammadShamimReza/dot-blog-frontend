import { useDeleteBlogMutation } from "@/redux/api/blogApi";
import { IBlog } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

function MyBlogs({ blog }: { blog: IBlog }) {
  const [deleteBlog] = useDeleteBlogMutation();

  const router = useRouter();

  const handleDeleteBlog = async (id: string) => {
    try {
      const result = await deleteBlog(id);
      if (result) {
        toast("Blog deleted successfully", {
          style: {
            border: "1px solid black",
          },
        });
      }
    } catch (error) {
      toast.error("server error", {
        style: {
          border: "1px solid black",
        },
      });
    }
  };
  return (
    <>
      <Toaster />
      <div className="m-3 hover:shadow rounded dark:shadow-white">
        <div className="max-w-sm  overflow-hidden border rounded-lg">
          <div className="px-6 py-4 h-60 flex flex-col justify-between">
            <Link href={`/blogs/${blog?.id}`}>
              <p className="font-bold text-xl mb-2">{blog?.title}</p>
              {blog?.content && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: blog.content.split(" ").slice(0, 10).join(" "),
                  }}
                />
              )}
            </Link>
            <div className="flex gap-1">
              <Link
                href={`/editBlog/${blog?.id}`}
                className="py-1 px-1 bg-gray-300 border rounded-lg hover:bg-gray-400 hover:text-white dark:bg-gray-500 dark:hover-bg-slate-400 dark:text-blackr w-1/2 text-center"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDeleteBlog(blog.id)}
                type="button"
                className="py-1 px-1 bg-gray-300 border rounded-lg hover:bg-gray-400 hover:text-white dark:bg-gray-500 dark:hover-bg-slate-400 dark:text-blackr w-1/2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBlogs;
