import React from "react";
import Popup, { EnquireButton } from "./popup";

function HeroText(): React.ReactElement {
  return (
    <div className="h-full flex flex-col gap-5 justify-center p-5 row-span-2">
      <p className="font-RobotoSlab text-5xl font-semibold leading-relaxed w-full sm:w-3/4 text-center sm:text-left">
        Available Trading for Wide Trade
      </p>
      <div className="flex gap-4 justify-center sm:justify-start">
        <div>
          <p className="text-gray-400 text-sm sm:text-lg  text-center sm:text-left">
            Features
          </p>
          <p className="text-lg sm:text-xl">Easy to use</p>
        </div>
        <div className=" w-[1px] bg-gray-500 "></div>
        <div>
          <p className="text-gray-400 text-sm  sm:text-lg  text-center sm:text-left">
            access over to
          </p>
          <p className="text-lg sm:text-xl">4800+ markets</p>
        </div>
      </div>
      <div className="flex gap-2  justify-center sm:justify-start">
        <EnquireButton />
      </div>
    </div>
  );
}

export default HeroText;
