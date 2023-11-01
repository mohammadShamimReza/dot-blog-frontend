import Link from "next/link";
import { SiGooglemessages } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import ThemeToggle from "./ThemeToggle";
import User from "./User";

function NavBar() {
  return (
    <nav className="p-4 border border-t-0 border-l-0 border-r-0 border-b-gray-200 dark:border-b-gray-600">
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="p-2">MS-Blog</div>
        </Link>

        <div className="flex items-center space-x-4">
          <div>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-2">
            <Link href="/blogs">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                <SiGooglemessages />
                Blogs
              </button>
            </Link>

            <Link href="/write">
              <button className="text-gray-600 dark:text-white flex items-center gap-2  p-2 rounded transition duration-300 transform hover:scale-110 cursor-pointer">
                <TfiWrite />
                Write
              </button>
            </Link>
            <div className="">
              <User />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
