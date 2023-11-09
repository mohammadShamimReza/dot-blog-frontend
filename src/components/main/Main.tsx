import { useBlogQuery } from "@/redux/api/blogApi";
import { useTypesQuery } from "@/redux/api/typeApi";
import { IBlog, IBlogType } from "@/types";
import { useState } from "react";
import Blog from "./Blog";
import Trendings from "./Trendings";

function Main() {
  const [type, setType] = useState<undefined | string>(undefined);
  const [searchTerm, setSearchTerm] = useState<undefined | string>(undefined);
  const { data: blogDatas } = useBlogQuery({
    typeId: type,
    searchTerm: searchTerm,
  });
  const blogData = blogDatas?.data;
  const { data: blogTypeDatas } = useTypesQuery({});

  return (
    <div className="">
      <div className="">
        <div className="flex sm:flex-row-reverse flex-col justify-between  gap-3">
          <div className="sm:w-1/5  flex flex-row sm:flex-col flex-wrap ">
            {blogTypeDatas?.data?.map((blogType: IBlogType) => (
              <div key={blogType?.id} className="  ">
                <div className="p-3">
                  <button
                    onClick={() => setType(blogType?.id)}
                    onDoubleClick={() => setType(undefined)}
                    className={
                      type === blogType?.id
                        ? "light:bg-transparent hover:light:bg-gray-300 hover:dark:bg-gray-700 light:text-gray-700   border border-gray-500 rounded-lg hover:light:shadow-lg hover:dark:shadow-lg transition duration-300 hover:scale-110 bg-gray-500 text-white dark:bg-gray-200 dark:text-black w-full "
                        : "light:bg-transparent dark:bg-gray-800 hover:light:bg-gray-300 hover:dark:bg-gray-700 light:text-gray-700 dark:text-gray-300 p-1 border border-gray-500 rounded-lg hover:light:shadow-lg hover:dark:shadow-lg transition duration-300 hover:scale-110  w-full"
                    }
                  >
                    {blogType?.title}
                  </button>
                </div>
              </div>
            ))}
            <div className="sm:block hidden">
              <Trendings />
            </div>
          </div>
          <div className="w-full sm:w-4/5 ">
            {blogData?.data.map((blog: IBlog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
        <div className="sm:hidden">
          <Trendings />
        </div>
      </div>
    </div>
  );
}

export default Main;
