import Layout from "@/components/Layouts/Layout";
import Blog from "@/components/main/Blog";
import Topics from "@/components/main/Topics";
import { ReactElement } from "react";

function Blogs() {
  return (
    <div>
      <div className="">
        <div className="flex justify-between  gap-3">
          <div className="w-full sm:w-4/5 ">
            <div className="flex  justify-center align-middle">
              <div className="mt-6 mb-14 w-1/2 ">
                <input
                  type="text"
                  name="name"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 dark:ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 "
                  placeholder="search"
                />
              </div>
            </div>
            <Blog />
          </div>
          <div className=" w-1/5  ">
            <Topics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;

Blogs.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};