import React from "react";
import { NavSection } from "../../constants/NavLink";
import type { NavGroup } from "../../interfaces/Interface";
import { Link } from "react-router-dom";
import { VISUALIZER } from "../../config/path";

const Sidebar = () => {
  return (
    <>
      <aside className="w-64 h-screen flex flex-col sticky top-0 bg-[var(--secondary-color)] text-[var(--text-color)]">
        <div className="px-6 py-4 border-b border-neutral-800">
          <h1 className="text-lg font-semibold  w-fit ">
            <span className="text-white px-2 py-3 bg-black rounded-l-2xl ">
              ⚙ DSA
            </span>
            <span className="text-black px-2 py-3 bg-white font-bold rounded-r-2xl">
              Visualizer
            </span>
          </h1>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
          {(NavSection as NavGroup[]).map((section, i) => (
            <div key={i}>
              <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2 gap-1">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.items.map((item, j) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={j}
                      className="flex items-center gap-3 hover:text-white cursor-pointer"
                    >
                      <Link
                        to={`/${VISUALIZER}/${item.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors"
                      >
                        <Icon size={14} />
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
