import { ReactElement } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Layout from "../components/Layouts/Layout";

function Profile() {
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
        <p className=" mb-2 text-2xl font-semibold">Morsed Hasan</p>

        <p className=" mb-2">Software Engineer</p>
        <p className=" mb-4">1234 Elm Street, City, Country</p>
        <div className="flex space-x-4 items-end">
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
            className="hover:underline text-gray-300  text-gray-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="">
              <AiFillGithub className="w-7 h-7 bg-black" />
            </div>
          </a>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Experience</h3>
          <p className="text-gray-600">
            Software Engineer with 5+ years of experience in web development and
            software design. Proficient in JavaScript, React, Node.js, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

Profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
