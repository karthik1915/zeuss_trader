import React from "react";

function EnquiryForm(): React.ReactElement {
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

export default EnquiryForm;
