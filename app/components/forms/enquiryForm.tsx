import React, { useState } from "react";
import SubmitEnquiryForm, {
  EnquiryFormType,
} from "@/app/components/api/submitEnquireForm";

interface EnquiryFormProps {
  closePopup: () => void;
}

function EnquiryForm({ closePopup }: EnquiryFormProps): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(false);
  const [res, setRes] = useState<"success" | "fail" | "unset">("unset");

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const enquiryData: EnquiryFormType = {
      name: name,
      email: email,
      message: message,
    };

    setLoading(true);

    try {
      await SubmitEnquiryForm(enquiryData).then(() => {
        setRes("success");
        setLoading(false);
        setTimeout(() => {
          closePopup();
        }, 2000);
      });
    } catch (error) {
      setRes(`fail`);
      setLoading(false);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(new FormData(event.currentTarget));
        }}
        className="flex flex-col justify-between p-4 text-black"
      >
        <p className="my-3 text-center text-xl md:text-2xl">Send Enquiry</p>
        <label htmlFor="name">
          <span className="text-sm text-gray-600 sm:text-lg">Name</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="mb-3 rounded-lg border px-4 py-1 text-lg"
          required
          placeholder=""
        />
        <label htmlFor="email">
          <span className="text-sm text-gray-600 sm:text-lg">Email</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          className="mb-3 rounded-lg border px-4 py-1 text-lg"
          placeholder=""
        />
        <label htmlFor="message">
          <span className="text-sm text-gray-600  sm:text-lg">Message</span>
        </label>
        <textarea
          rows={5}
          required
          id="message"
          name="message"
          className="rounded-lg border px-4 py-1 text-lg"
          placeholder=""
        />
        <div className="text-center">{loading ? "Loading" : ""}</div>
        <button
          type="submit"
          className={`my-3 rounded-xl
          ${
            res === "unset"
              ? "bg-purple-500 hover:bg-purple-800"
              : res === "success"
                ? "bg-green-600"
                : "bg-red-600"
          }
          px-4 py-2 text-white `}
        >
          {res === "unset"
            ? "Submit"
            : res === "success"
              ? "Successfully Submitted"
              : "Failed to Submit Fomr"}
        </button>
      </form>
    </>
  );
}

export default EnquiryForm;
