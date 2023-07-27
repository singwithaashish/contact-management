import React, { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar(props: SidebarProps) {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  return (
    <div className="grid grid-cols-12 min-h-screen">
      {/* the sidebar takes 1/6th of screen and content takes the remaining space */}
      {/* <header className="col-span-12 bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">Sidebar</h1>
        </header> */}
      <div className="col-span-2 flex flex-col w-full">
        <Link
            to="/contacts"
          className={
            "p-4 border-b hover:bg-blue-400 hover:text-white duration-300 " +
            (currentRoute === "/contacts"
              ? "bg-blue-700 text-white"
              : "bg-white text-black")
          }
        >
          Contacts
        </Link>
        <Link
          to="/charts"
          className={
            "p-4 border-b hover:bg-blue-400 hover:text-white duration-300 " +
            (currentRoute === "/charts"
              ? "bg-blue-700 text-white"
              : "bg-white text-black")
          }
        >
          Charts and Maps
        </Link>
      </div>
      <div className="col-span-10">{props.children}</div>
    </div>
  );
}
