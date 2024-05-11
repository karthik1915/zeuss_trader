import React from "react";
import SubmitEnquiryForm, {
  EnquiryFormType,
} from "@/app/components/api/submitEnquireForm";

interface EnquiryFormProps {
  closePopup: () => void;
}

function EnquiryForm({ closePopup }: EnquiryFormProps): React.ReactElement {
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const enquiryData: EnquiryFormType = {
      name: name,
      email: email,
      message: message,
    };

    try {
      await SubmitEnquiryForm(enquiryData);
      closePopup();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
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
        placeholder=""
      />
      <label htmlFor="email">
        <span className="text-sm text-gray-600 sm:text-lg">Email</span>
      </label>
      <input
        id="email"
        type="email"
        name="email"
        className="mb-3 rounded-lg border px-4 py-1 text-lg"
        placeholder=""
      />
      <label htmlFor="message">
        <span className="text-sm text-gray-600  sm:text-lg">Message</span>
      </label>
      <textarea
        rows={5}
        id="message"
        name="message"
        className="rounded-lg border px-4 py-1 text-lg"
        placeholder=""
      />
      <button
        type="submit"
        className="my-3 rounded-xl bg-purple-500 px-4 py-2 text-white hover:bg-purple-800"
      >
        Submit
      </button>
    </form>
  );
}

export default EnquiryForm;
