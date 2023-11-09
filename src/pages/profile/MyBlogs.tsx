import { useDeleteBlogMutation } from "@/redux/api/blogApi";
import { IBlog } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import {
  generateSHA1,
  generateSignature,
  getPublicIdFromUrl,
} from "./CloudinaryDelete";

function MyBlogs({ blog, id }: { blog: IBlog; id: string }) {
  const [deleteBlog] = useDeleteBlogMutation();

  const router = useRouter();

  const publicId = getPublicIdFromUrl(blog.thumbnailImg as string);

  const handleDeleteImage = async (publicId: string) => {
    const cloudName = "dqwnzs85c";
    const timestamp = new Date().getTime();
    const apiKey = "936143453712422";
    const apiSecret = "J-wz1hk3ROvWX32COiQhh0yA46M";
    const signature = generateSHA1(generateSignature(publicId, apiSecret));
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`;

    try {
      const response = await axios.post(url, {
        public_id: publicId,
        signature: signature,
        api_key: apiKey,
        timestamp: timestamp,
      });

      console.error("ok");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteBlog = async (id: string) => {
    handleDeleteImage(publicId as string);
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
            {id ? (
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
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyBlogs;
