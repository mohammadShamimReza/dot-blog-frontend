import { ReactElement } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineEdit } from "react-icons/ai";
import Layout from "../../components/Layouts/Layout";
import MyBlogs from "./MyBlogs";

function ProfileData() {
  return (
    <div
      className="rounded-lg overflow-hidden  max-w-2xl mx-auto
      dark:bg-gray-800 bg-white"
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-full h-96 object-cover"
      />
      <div className="p-4 dark:text-white text-gray-800">
        <p className=" mb-2 text-2xl font-semibold flex gap-2 align-middle">
          Morsed Hasan <AiOutlineEdit className="mt-1 border-2   rounded-lg" />
        </p>

        <p className=" mb-2 flex gap-2">
          Software Engineer{" "}
          <AiOutlineEdit className="mt-1 border-2 rounded-md" />
        </p>
        <p className=" mb-4">1234 Elm Street, City, Country</p>
        <div className="mt-4 ">
          <p className="text-lg font-semibold mb-2 flex gap-2">
            Experience <AiOutlineEdit className="mt-1 border-2   rounded-lg" />
          </p>
          <div className="flex gap-2 align-middle"></div>
          <p className="">
            Software Engineer with 5+ years of experience in web development and
            software design. Proficient in JavaScript, React, Node.js, and more.
          </p>
        </div>
        <br />
        <div className="flex space-x-4 items-end ">
          <a
            href="https://www.linkedin.com/in/johndoe"
            className="hover:underline text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <AiFillLinkedin className="w-8 h-8 text-blue-600" />
            </div>
          </a>
          <a
            href="https://github.com/johndoe"
            className="hover:underline   text-gray-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <AiFillGithub className="w-7 h-7 bg-white dark:bg-black" />
            </div>
          </a>
        </div>
      </div>
      <p className="text-center font-semibold text-lg">Blogs</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        <MyBlogs />
      </div>
    </div>
  );
}

export default ProfileData;

ProfileData.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
