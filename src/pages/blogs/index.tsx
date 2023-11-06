import Layout from "@/components/Layouts/Layout";
import Blog from "@/components/main/Blog";
import { useBlogQuery } from "@/redux/api/blogApi";
import { useTypesQuery } from "@/redux/api/typeApi";
import { IBlog, IBlogType } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { ReactElement, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

type BlogsData = {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    data: {
      content: string;
      createdAt: string;
      id: string;
      thumbnailImg: string;
      title: string;
      typeId: string;
      updatedAt: string;
      userId: string;
    }[];
    meta: {
      limit: number;
      page: number;
      total: number;
    };
  };
};



function Blogs() {
  const [type, setType] = useState<undefined | string>(undefined);
  const [searchTerm, setSearchTerm] = useState<undefined | string>(undefined);
    const [pageCount, setPageCount] = useState<number>(1);

    const { data: blogDatas } = useBlogQuery({
      typeId: type,
      searchTerm: searchTerm,
      page: pageCount,
    });
    const blogData = blogDatas;
    const { data: blogTypeDatas } = useTypesQuery({});

    const handleSearchTerm = (data: any) => {
      console.log(data);
      setSearchTerm(data.searchTerm);
    };

    const validationSchema = yup.object().shape({
      searchTerm: yup.string(),
    });

    const { control, handleSubmit, reset } = useForm({
      resolver: yupResolver(validationSchema),
    });

    console.log(blogData);

    return (
      <div>
        <div className="">
          <div className="flex sm:flex-row-reverse flex-col justify-between  gap-3 ">
            <div className="sm:w-1/5 sm:pt-28 pt-0 flex flex-row sm:flex-col flex-wrap ">
              {blogTypeDatas?.map((blogType: IBlogType) => (
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
            </div>
            <div className="w-full sm:w-4/5 sm:order-1">
              <form
                onChange={handleSubmit(handleSearchTerm)}
                className="flex  justify-center align-middle"
              >
                <div className="mt-6 mb-14 w-1/2">
                  <Controller
                    name="searchTerm"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        id="emasearchTermil"
                        type="searchTerm"
                        placeholder="Search here"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      />
                    )}
                  />
                </div>
              </form>

              {blogData?.data?.map((blog: IBlog) => (
                <Blog key={blog.id} blog={blog} />
              ))}
            </div>
          </div>

          <div className="flex justify-center align-middle">
            <ul className="inline-flex  -space-x-px text-sm">
              <li>
                <button
                  onClick={() =>
                    setPageCount(pageCount === 1 ? 1 : pageCount - 1)
                  }
                  className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Previous
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPageCount(1)}
                  className={
                    pageCount === 1
                      ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                >
                  1
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPageCount(2)}
                  className={
                    pageCount === 2
                      ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                >
                  2
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPageCount(3)}
                  className={
                    pageCount === 3
                      ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                >
                  3
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPageCount(4)}
                  className={
                    pageCount === 4
                      ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                >
                  4
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPageCount(1)}
                  className={
                    pageCount === 5
                      ? "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-300 hover:text-gray-700 dark:bg-gray-600 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }
                >
                  5
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    setPageCount(pageCount === 5 ? 5 : pageCount + 1)
                  }
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Blogs;

Blogs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
