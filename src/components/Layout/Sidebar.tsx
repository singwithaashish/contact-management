import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  children: React.ReactNode;
}

export default function Sidebar(props: SidebarProps) {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className=" min-h-screen bg-gray-200">
      {/* the sidebar takes 1/6th of screen and content takes the remaining space */}
      <header className="h-[10vh] bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          {currentRoute === "/contacts" ? "Contacts" : "Charts and Maps"}
        </h1>
      </header>
      <div className="grid grid-cols-12 gap-4 min-h-[90vh]">
        <div className="col-span-2 flex flex-col w-full bg-white min-h-full">
          <Link
            to="/contacts"
            className={
              "p-4 border-b hover:bg-blue-400 hover:text-white duration-300 " +
              (currentRoute === "/contacts"
                ? "text-blue-700"
                : "text-black")
            }
          >
            Contacts
          </Link>
          <Link
            to="/charts"
            className={
              "p-4 border-b hover:bg-blue-400 hover:text-white duration-300 " +
              (currentRoute === "/charts"
                ? "text-blue-700"
                : " text-black")
            }
          >
            Charts and Maps
          </Link>
        </div>
        <div className="col-span-10">{props.children}</div>
      </div>
    </div>
  );
}
