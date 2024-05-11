"use client";
import { useState } from "react";
import Popup from "@/app/components/popup";
import EnquiryForm from "@/app/components/forms/enquiryForm";

export const EnquireButton = (): React.ReactElement => {
  const [open, setOpen] = useState<boolean>(false);

  const togglePopup = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className="w-52 rounded-lg border border-blue-400 bg-blue-400 py-4 font-semibold text-black hover:bg-black hover:text-white sm:text-lg"
      >
        Enquire Now
      </button>
      {open && (
        <Popup isOpen={open} togglePopup={togglePopup}>
          <EnquiryForm closePopup={togglePopup} />
        </Popup>
      )}
    </>
  );
};
