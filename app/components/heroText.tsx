import React from "react";
import Popup, { EnquireButton } from "./popup";

function HeroText(): React.ReactElement {
  return (
    <div className="row-span-2 flex h-full flex-col justify-center gap-5 p-5">
      <p className="w-full text-center font-RobotoSlab text-5xl font-semibold leading-relaxed sm:w-3/4 sm:text-left">
        Available Trading for Wide Trade
      </p>
      <div className="flex justify-center gap-4 sm:justify-start">
        <div>
          <p className="text-center text-sm text-gray-400  sm:text-left sm:text-lg">
            Features
          </p>
          <p className="text-lg sm:text-xl">Easy to use</p>
        </div>
        <div className=" w-[1px] bg-gray-500 "></div>
        <div>
          <p className="text-center text-sm  text-gray-400  sm:text-left sm:text-lg">
            access over to
          </p>
          <p className="text-lg sm:text-xl">4800+ markets</p>
        </div>
      </div>
      <div className="flex justify-center  gap-2 sm:justify-start">
        <EnquireButton />
      </div>
    </div>
  );
}

export default HeroText;
