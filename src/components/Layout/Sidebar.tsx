import React from 'react'
import { Link } from 'react-router-dom'

interface SidebarProps {
    currentRoute: string;
}

export default function Sidebar(
    { currentRoute }: SidebarProps
) {
  return (
    <div className="col-span-12 md:col-span-2 flex flex-row md:flex-col w-full bg-white min-h-full">
          <Link
            to="/"
            className={
              "p-4 border-b hover:bg-blue-400 hover:text-white duration-300 " +
              (currentRoute === "/"
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
  )
}
