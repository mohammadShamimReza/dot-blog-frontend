import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";
import { WiMoonAltThirdQuarter } from "react-icons/wi";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  useEffect(() => {
    setMounted(true);
  }, [mounted, theme]);
  if (!mounted) return null;
  return (
    <div
      className="relative inline-block"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <div className="text-gray-600 dark:text-white transition duration-300 transform hover:scale-110 cursor-pointer">
        <div className="flex items-center gap-2">
          <WiMoonAltThirdQuarter /> Theme
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-1 top-full left-0 space-y-2">
          <button
            className="rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            onClick={() => {
              setTheme("light");
              // toggleTheme();
              toggleDropdown();
            }}
          >
            <BsFillMoonStarsFill /> Light
          </button>
          <button
            className="rounded-lg flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-100 text-white dark:text-gray-800 hover:bg-gray-800 dark:hover:bg-gray-300 transition duration-300"
            onClick={() => {
              setTheme("dark");
              // toggleTheme();
              toggleDropdown();
            }}
          >
            <BsFillBrightnessHighFill /> Dark
          </button>
        </div>
      )}
      {/* <button onClick={toggleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill />
          ) : (
            <BsFillBrightnessHighFill />
          )}
        </button> */}
    </div>
  );
}

export default ThemeToggle;
