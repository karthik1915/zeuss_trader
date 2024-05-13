import React, { useState } from "react";
import SubmitContactForm, { ContactFormType } from "../api/submitContactForm";

const ContactForm = (): React.ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [res, setRes] = useState<"success" | "fail" | "unset">("unset");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    const contactData: ContactFormType = {
      name: name,
      phone: phone,
      email: email,
      message: message,
    };

    try {
      await SubmitContactForm(contactData).then(() => {
        setRes("success");
        setLoading(false);
      });
    } catch (error) {
      setRes(`fail`);
      setLoading(false);
      setTimeout(() => {
        setRes("unset");
      }, 3000);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid-col-1 mt-8 grid h-auto w-full gap-y-3 md:grid-cols-2"
    >
      <div className="flex flex-col justify-between gap-3 px-5">
        <input
          type="text"
          name="name"
          required
          placeholder="Name"
          className="w-full rounded-lg bg-zinc-300 px-4 py-3 outline-none"
        />
        <input
          type="text"
          name="phone"
          required
          placeholder="Mobile Number"
          className="w-full rounded-lg bg-zinc-300 px-4 py-3 outline-none"
        />
        <input
          type="text"
          name="email"
          required
          placeholder="Email Address"
          className="w-full rounded-lg bg-zinc-300 px-4 py-3 outline-none"
        />
      </div>
      <div className="px-5">
        <textarea
          name="message"
          required
          className="z-10 h-32 w-full resize-none rounded-lg bg-zinc-300 px-4  py-3 outline-none md:h-full"
          placeholder="Message"
        />
      </div>
      <div className="flex justify-center md:col-span-2">
        <button
          type="submit"
          className={`my-3 rounded-xl 
          ${
            res === "unset"
              ? "bg-orange-500  hover:bg-orange-800"
              : res === "success"
                ? "bg-green-600"
                : "bg-red-600"
          } px-12 py-2 text-black`}
        >
          {res === "unset"
            ? "Submit"
            : res === "success"
              ? "Successfully Submitted"
              : "Failed to Submit Fomr"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
