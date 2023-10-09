import ThemeToggle from "./ThemeToggle";

function NavBar() {
  return (
    <nav className="p-4 border border-t-0 border-l-0 border-r-0 border-b-gray-200 dark:border-b-gray-600">
      <div className="flex items-center justify-between">
        <div className="p-2">MS-Blog</div>
        <div>
          <div className="relative mt-2 ">
            <input
              type="text"
              name="name"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 dark: ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 "
              placeholder="search"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-2">
            <button className="  p-2 rounded">Search</button>
            <button className=" p-2 rounded">Write</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
