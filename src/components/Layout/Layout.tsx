import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar"

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <div className=" min-h-screen bg-gray-200">
      <header className="h-[10vh] bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-2xl font-bold">
          {currentRoute === "/contacts" ? "Contacts" : "Charts and Maps"}
        </h1>
      </header>
      {/* the Sidebar takes 1/6th of screen and content takes the remaining space */}
      <div className="grid grid-cols-12 gap-4 min-h-[90vh]">
        <Sidebar currentRoute={currentRoute} />
        <div className="col-span-12 md:col-span-10">{props.children}</div>
      </div>
    </div>
  );
}
