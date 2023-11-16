import { getUserInfo } from "@/services/auth.service";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { SiGooglemessages } from "react-icons/si";
import { TfiWrite } from "react-icons/tfi";
import ThemeToggle from "./ThemeToggle";
import User from "./User";

function NavBar() {
  const handleScroll = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      // Check if navbar is not null
      if (window.scrollY > 0) {
        navbar.classList.add("fixed", "bg-gray-200", "dark:bg-gray-700"); // Add your desired background color class
      } else {
        navbar.classList.remove("fixed", "bg-gray-200", "dark:bg-gray-700"); // Remove the background color class
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { role, id } = getUserInfo() as any;

  const router = useRouter();


  return (
    <nav
      id="navbar"
      className="p-4 border border-t-0 border-l-0 border-r-0 border-b-gray-200 dark:border-b-gray-600 z-10 w-full"
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <div className="p-2">Dot-Blog</div>
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

            <Link href={!role ? "/login" : "/write"}>
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
