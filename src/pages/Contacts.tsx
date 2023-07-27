import React from "react";

export default function Contacts() {
  return (
    <div className=" bg-gray-200 h-full flex flex-col items-center">
      <button className="font-bold py-2 px-4 border-black border-2 bg-gray-300">
        Create Contact
      </button>
      <div className="flex p-5 border-2 border-black mt-20 bg-slate-200">
        <svg viewBox="0 0 512 512" fill="currentColor" height="4rem" width="4rem">
          <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z" />
        </svg>
        <div className="flex flex-col">
          <h3 className="text-2xl">No Contact Found</h3>
          <p className="text-gray-500">
            Please add contact from Create Contact Button
          </p>
        </div>
      </div>
    </div>
  );
}
