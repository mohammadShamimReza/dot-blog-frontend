import { useBlogQuery } from "@/redux/api/blogApi";
import { IBlog } from "@/types";
import Blog from "./Blog";
import Topics from "./Topics";
import Trendings from "./Trendings";

function Main() {
  const { data } = useBlogQuery({});
  const blogData = data?.data;
  console.log(blogData);
    return (
      <div className="">
        <div></div>
        <div className="flex justify-between  gap-3">
          <div className="w-full sm:w-4/5 ">
            {blogData?.map((blog: IBlog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </div>
          <div className=" w-1/5  ">
            <Topics />
            <Trendings />
          </div>
        </div>
      </div>
    );
}

export default Main;
