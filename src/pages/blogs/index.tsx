import Layout from "@/components/Layouts/Layout";
import Blog from "@/components/main/Blog";
import Topics from "@/components/main/Topics";
import { ReactElement } from "react";

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

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blog");
  const blogs = await res.json();
  console.log(blogs, "this is from blogs");
  return { props: { blogs } };
};

// satisfies GetServerSideProps<{
//   blogs: any;
// }>;

function Blogs({ blogs }: { blogs: BlogsData }) {
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
            {blogs?.data?.data?.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
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
