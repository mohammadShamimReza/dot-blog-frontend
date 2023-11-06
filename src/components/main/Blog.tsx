import { IBlog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { AiFillLike } from "react-icons/ai";

function Blog({ blog }: { blog: IBlog }) {
  return (
    <div className="">
      {" "}
      <div className="h-72 mb-10">
        <div
          className="bg-white p-4 rounded-lg shadow-xl border border-t dark:border-none  mb-4 transition duration-100 transform hover:shadow-2xl 
          isDarkMode dark:bg-gray-800 hover:dark:shadow-slate-600 h-72 flex flex-col justify-between"
        >
          <div className="">
            <Link href={`/blogs/${blog.id}`}>
              <h2
                className="text-gray-800 mb-4 
            dark:text-gray-300 text-xl font-semibold overflow-clip"
              >
                {blog.title}
              </h2>
              <p
                className=" mb-2
            isDarkMode dark:text-gray-300 truncate-ellipsis line-clamp-5"
              >
                {blog?.content && (
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                )}
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-between text-gray-600">
            <Link href={"/profile/asdf"}>
              <div className="flex items-center">
                <Image
                  src={""}
                  height={2}
                  width={2}
                  alt="Writer"
                  className="flex w-8 h-8 rounded-full mr-2"
                />

                <span>Morsed Hasan</span>
              </div>
            </Link>
            <button
              className="flex items-center 
              isDarkMode  dark:text-gray-300"
            >
              <AiFillLike />
              500
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
