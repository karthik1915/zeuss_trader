"use client";
import React from "react";
import { CrossIcon } from "../constants/icons";

function Popup({
  isOpen,
  togglePopup,
  children,
}: {
  isOpen: boolean;
  togglePopup: () => void;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={togglePopup}
      ></div>
      {/* Popup content */}
      <div className="w- h-auto w-80 transform rounded-lg bg-white shadow-lg transition-transform duration-300 sm:h-auto sm:w-[500px]">
        {children}
        <button
          onClick={togglePopup}
          className=" absolute right-4 top-0 mt-4 rounded-md p-2  focus:outline-none"
        >
          <CrossIcon width={12} height={12} fill="gray" />
        </button>
      </div>
    </div>
  );
}

export default Popup;
