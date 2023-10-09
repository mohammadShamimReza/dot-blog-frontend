import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillBrightnessHighFill, BsFillMoonStarsFill } from "react-icons/bs";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, [mounted, theme]);
  if (!mounted) return null;
  return (
    <div className="">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? (
          <BsFillMoonStarsFill />
        ) : (
          <BsFillBrightnessHighFill />
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;
