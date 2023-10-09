import Blogs from "./Blogs";
import Topics from "./Topics";

function Main() {
  return (
    <div className="flex justify-between flex-col-reverse sm:flex-row gap-3">
      <div className="w-full sm:w-4/5 ">
        <Blogs />
      </div>
      <div className=" sm:w-1/5 w-full ">
        <Topics />
      </div>
    </div>
  );
}

export default Main;
