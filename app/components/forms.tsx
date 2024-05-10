import React from "react";

export function EnquiryForm(): React.ReactElement {
  return (
    <div className="flex flex-col justify-between p-4 text-black">
      <p className="my-3 text-center text-xl md:text-2xl">Send Enquiry</p>
      <label>
        <span className="text-sm text-gray-600 sm:text-lg">Name</span>
      </label>
      <input
        type="text"
        className="mb-3 rounded-lg border px-4 py-1 text-lg"
        placeholder=""
      />
      <label>
        <span className="text-sm text-gray-600 sm:text-lg">Email</span>
      </label>
      <input
        type="email"
        className="mb-3 rounded-lg border px-4 py-1 text-lg"
        placeholder=""
      />
      <label>
        <span className="text-sm text-gray-600  sm:text-lg">Message</span>
      </label>
      <textarea
        rows={5}
        className="rounded-lg border px-4 py-1 text-lg"
        placeholder=""
      />
      <button className="my-3 rounded-xl bg-purple-500 px-4 py-2 text-white hover:bg-purple-800">
        Submit
      </button>
    </div>
  );
}

export const ContactForm = () => {
  return (
    <>
      <div className="grid-col-1 mt-8  grid h-auto w-full gap-y-3 md:grid-cols-2">
        <div className="flex flex-col justify-between gap-3 px-5">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg bg-zinc-300 px-4 py-3 outline-none"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full rounded-lg bg-zinc-300 px-4 py-3 outline-none"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="w-full rounded-lg bg-zinc-300 px-4 py-3 outline-none"
          />
        </div>
        <div className="px-5">
          <textarea
            className="z-10 h-32 w-full resize-none rounded-lg bg-zinc-300 px-4  py-3 outline-none md:h-full"
            placeholder="Message"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" my-3 rounded-xl bg-orange-500 px-12 py-2 text-black  hover:bg-orange-800">
          Submit
        </button>
      </div>
    </>
  );
};
