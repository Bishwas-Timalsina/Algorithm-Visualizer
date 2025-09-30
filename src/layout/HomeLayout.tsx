import React from "react";
import Sidebar from "../components/SideBar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";

const HomeLayout = () => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-screen overflow-hidden">
      <aside className="bg-[var(--secondary-color)] h-full py-8">
        <Sidebar />
      </aside>

      <main className="bg-[var(--bg-color)] flex flex-col overflow-hidden">
        <header className="w-full sticky top-0 bg-[var(--primary-color)]/10 backdrop-blur-md border-b border-[var(--primary-color)]/20 flex items-center z-10 p-8 px-4">
          <Navbar />
        </header>

        <section className="flex-1 overflow-y-auto px-6 py-4 text-[var(--text-color)]">
          {Array.from({ length: 50 }).map((_, i) => (
            <p key={i}>Lorem ipsum dolor sit amet..asdasaaaaaaaaaaaaaaaaa.</p>
          ))}

          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default HomeLayout;
