"use client";
import { CrossIcon, WhatappIconBig, WhatsappIcon } from "@/app/constants/icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const WhatsAppOverlay = () => {
  const [open, setopen] = useState<boolean>(false);

  function openWhatsapp() {
    const url = "https://wa.me/6382980289";
    window.open(url, "_blank");
  }

  return (
    <>
      <button
        title="Whatsapp"
        className="fixed bottom-6 right-24 rounded-full bg-green-500 p-3.5"
        onClick={() => setopen(!open)}
      >
        {!open ? (
          <WhatsappIcon width={24} height={24} fill="white" />
        ) : (
          <CrossIcon width={24} height={24} fill="white" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-0 grid w-96 grid-rows-[100px,1fr] rounded-xl bg-white shadow-xl sm:right-8"
          >
            <div className="flex w-full items-center justify-evenly rounded-t-xl bg-green-500 p-3 text-white">
              <WhatsappIcon width={35} height={35} fill="white" />
              <div className="w-3/4">
                <p className="mb-2 font-RobotoSlab text-lg">
                  Start a Conversation
                </p>
                <p className="text-sm font-light">
                  Click one of our Member below to chat on&nbsp;
                  <span className="font-bold">Whatsapp</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col py-6 pl-3 pr-4">
              <p className="mb-2 text-sm font-thin opacity-50">
                Team typically replies in few minutes
              </p>
              <div
                onClick={openWhatsapp}
                className="flex cursor-pointer items-center justify-between hover:shadow-xl"
              >
                <div className="flex items-center gap-2 border-l-2 border-green-500 pl-2">
                  <WhatappIconBig />
                  <div className="">
                    <p>Zeuss Trader</p>
                    <p className="text-sm opacity-60">Trading Company</p>
                  </div>
                </div>
                <WhatsappIcon width={24} height={24} fill="#cccccc" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
