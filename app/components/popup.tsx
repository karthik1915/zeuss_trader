"use client";
import React, { useState } from "react";
import { EnquiryForm } from "./forms";
import { CrossIcon } from "../constants/icons";

export const EnquireButton = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className="w-52 sm:text-lg font-semibold py-4 rounded-lg bg-blue-400 text-black hover:bg-black hover:text-white border border-blue-400"
      >
        Enquire Now
      </button>
      {open && (
        <Popup isOpen={open} togglePopup={togglePopup}>
          <EnquiryForm />
        </Popup>
      )}
    </>
  );
};

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
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      {/* Background overlay */}
      <div
        className="transition-opacity duration-300 fixed inset-0 bg-black bg-opacity-50"
        onClick={togglePopup}
      ></div>
      {/* Popup content */}
      <div className="transition-transform duration-300 transform w-80 sm:w-[500px] sm:h-auto w- h-auto bg-white rounded-lg shadow-lg">
        {children}
        <button
          onClick={togglePopup}
          className=" absolute top-0 right-4 mt-4 p-2 rounded-md  focus:outline-none"
        >
          <CrossIcon width={12} height={12} fill="gray" />
        </button>
      </div>
    </div>
  );
}

export default Popup;
