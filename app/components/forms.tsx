import React from "react";

export function EnquiryForm(): React.ReactElement {
  return (
    <div className="text-black flex flex-col justify-between p-4">
      <p className="text-xl md:text-2xl text-center my-3">Send Enquiry</p>
      <label>
        <span className="text-gray-600 text-sm sm:text-lg">Name</span>
      </label>
      <input
        type="text"
        className="border py-1 px-4 rounded-lg mb-3 text-lg"
        placeholder=""
      />
      <label>
        <span className="text-gray-600 text-sm sm:text-lg">Email</span>
      </label>
      <input
        type="email"
        className="border py-1 px-4 rounded-lg mb-3 text-lg"
        placeholder=""
      />
      <label>
        <span className="text-gray-600 text-sm  sm:text-lg">Message</span>
      </label>
      <textarea
        rows={5}
        className="border py-1 px-4 rounded-lg text-lg"
        placeholder=""
      />
      <button className="px-4 py-2 bg-purple-500 my-3 rounded-xl text-white hover:bg-purple-800">
        Submit
      </button>
    </div>
  );
}

export const ContactForm = () => {
  return (
    <>
      <div className="w-full h-auto  mt-8 grid md:grid-cols-2 grid-col-1 gap-y-3">
        <div className="px-5 flex flex-col justify-between gap-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-3 outline-none bg-zinc-300 px-4 rounded-lg"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full py-3 outline-none bg-zinc-300 px-4 rounded-lg"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="w-full py-3 outline-none bg-zinc-300 px-4 rounded-lg"
          />
        </div>
        <div className="px-5">
          <textarea
            className="h-32 md:h-full w-full outline-none py-3 px-4 bg-zinc-300  rounded-lg z-10 resize-none"
            placeholder="Message"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button className=" px-12 py-2 bg-orange-500 my-3 rounded-xl text-black  hover:bg-orange-800">
          Submit
        </button>
      </div>
    </>
  );
};
