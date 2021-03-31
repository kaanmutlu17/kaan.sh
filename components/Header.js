import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import NextLink from "next/link";
import { MoonOutline, SunnyOutline } from "react-ionicons";

export default function Container({ children, dir, pos, atHome, isMobile }) {
  const [ mounted, setMounted ] = useState(false);

  const { theme, setTheme } = useTheme();
  const color = theme === "dark" ? "white" : "black";

  useEffect(() => setMounted(true), []);

  const headerClass = () => {
    let CLASS = "home-header";
    if (isMobile || pos >= 300) CLASS += " fill";
    if (!atHome && pos > 0) CLASS += " fill";
    switch (dir) {
      case "down":
        return (CLASS += " hide");
      case "up":
        return (CLASS += " show");
      case "top":
        return CLASS;
      default:
        break;
    }
    return CLASS;
  };

  return (
    <header className={headerClass()}>
        <nav className="z-0 flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 bg-white sticky-nav md-auto dark:bg-black">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-2.5 pt-2.5 py-2.5 px-2.5 bg-gray-200 rounded dark:bg-black focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "dark" ? (
                <MoonOutline color={color} />
              ) : (
                <SunnyOutline color={color} />
              )
            }
          </button>

          <div>
            <NextLink href="mailto:kaan@kaan.sh">
              <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">Contact</a>
            </NextLink>
          </div>

        </nav>
    </header>
  )
}