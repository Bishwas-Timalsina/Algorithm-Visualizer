import { ChevronRight, LayoutGrid, Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [dark, setDark] = useState(false);

  const segments = location.pathname.split("/").filter(Boolean);

  const paths = segments.map((segment, index) => ({
    name: segment.charAt(0).toUpperCase() + segment.slice(1),
    path: "/" + segments.slice(0, index + 1).join("/"),
  }));

  const toggleDark = () => setDark((prev) => !prev);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setDark(true);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <>
      <div className="grid grid-cols-12 justify-between w-full">
        <div className="flex items-center text-gray-400 space-x-2 col-span-11">
          <LayoutGrid className="w-4 h-4" />
          <span className="text-sm">|</span>

          <nav className="flex items-center space-x-1">
            <Link to="/" className="text-sm hover:text-gray-300 transition">
              Home
            </Link>

            {paths.map((segment, i) => (
              <div key={i} className="flex items-center space-x-1">
                <ChevronRight className="w-4 h-4" />
                {i === paths.length - 1 ? (
                  <span className="text-sm text-white font-medium">
                    {segment.name}
                  </span>
                ) : (
                  <Link
                    to={segment.path}
                    className="text-sm hover:text-gray-300 transition"
                  >
                    {segment.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="col-span-1 flex justify-end">
          <button
            onClick={toggleDark}
            className="p-2 rounded-full bg-[var(--secondary-color)] hover:bg-[var(--primary-color)] transition"
          >
            {dark ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-gray-300" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
