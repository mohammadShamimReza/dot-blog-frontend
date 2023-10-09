import { AiFillLike } from "react-icons/ai";

function Blog() {
  return (
    <div className="h-72">
      <div
        className="bg-white p-4 rounded-lg shadow-md mb-4 
          isDarkMode dark:bg-gray-800 h-72 flex flex-col justify-between"
      >
        <div className="">
          <h2
            className="text-xl font-semibold mb-2
            isDarkMode dark:text-gray-300"
          >
            who to deploy
          </h2>
          <p
            className="text-gray-800 mb-4 
            dark:text-gray-300"
          >
            asdfasdfasdf
          </p>
        </div>

        <div className="flex items-center justify-between text-gray-600">
          <div className="flex items-center">
            <img alt="Writer" className="w-8 h-8 rounded-full mr-2" />

            <span>Writer Name</span>
          </div>

          <div
            className="flex items-center 
              isDarkMode  dark:text-gray-300"
          >
            <AiFillLike />
            500
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
