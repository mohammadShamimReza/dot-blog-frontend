import Blog from "./Blog";
import Topics from "./Topics";
import Trendings from "./Trendings";

function Main() {
  return (
    <div className="">
      <div></div>
      <div className="flex justify-between  gap-3">
        <div className="w-full sm:w-4/5 ">
          <Blog />
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
