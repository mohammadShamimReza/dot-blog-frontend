import Link from "next/link";
import { useState } from "react";
import { RxAvatar } from "react-icons/rx";

function User() {
  const [user, setUser] = useState(true);

  return (
    <div>
      <div className="relative group">
        <RxAvatar className="w-8 h-8" />

        {!user && (
          <div className="absolute hidden  group-hover:block top-full right-2 space-y-2">
            <div className="">
              <Link href={"/login"}>
                <button className="w-20 rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800  hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  Login
                </button>
              </Link>
            </div>
            <div className="">
              <Link href={"/signup"}>
                <button className="w-20 rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800  hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  SignUp
                </button>
              </Link>
            </div>
          </div>
        )}

        {user && (
          <div className="absolute hidden  group-hover:block top-full right-2 space-y-2">
            <div className="">
              <Link href={"/profile/asdf"}>
                <button className="w-20 rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800  hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  Profile
                </button>
              </Link>
            </div>
            <div className="">
              <Link href={"/signup"}>
                <button className="w-20 rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800  hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300">
                  LouOut
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;
