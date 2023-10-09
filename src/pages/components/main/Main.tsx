import Blogs from "./Blogs";
import Topics from "./Topics";

function Main() {
  return (
    <div className="min-h-screen flex justify-center ">
      <div className="w-full max-w-5xl p-4 shadow-md rounded-lg ">
        <div className="flex justify-between flex-col-reverse sm:flex-row gap-3">
          <div className="w-full sm:w-4/5 ">
            <Blogs />
          </div>
          <div className=" sm:w-1/5 w-full ">
            <Topics />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
