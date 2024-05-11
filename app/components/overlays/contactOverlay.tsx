"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { CrossIcon, SupportIcon } from "@/app/constants/icons";

export function ContactOverlay(): React.ReactElement {
  const [showCard, setShowCard] = useState(true);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="fixed bottom-6 right-24">
      <AnimatePresence>
        {showCard ? (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute  bottom-8 right-0 grid w-72 grid-cols-[100px,1fr] rounded-xl bg-white shadow-xl sm:right-8"
          >
            <div className="flex w-full items-center justify-center rounded-s-xl bg-orange-500">
              <SupportIcon width={40} height={40} fill="black" />
            </div>
            <div className="flex flex-col p-3">
              <h2 className="mb-2 text-lg font-semibold">Contact Us</h2>
              <p className="mb-3 text-sm text-gray-600">+91 6382980289</p>
              <h2 className="mb-2 text-lg font-semibold">Mail Us</h2>
              <p className="mb-3 text-sm text-gray-600">
                zeusstrader@gmail.com
              </p>
            </div>
            <button
              title="close"
              onClick={toggleCard}
              className="absolute -right-2 -top-2 rounded-full bg-orange-500 p-2 text-white hover:bg-orange-600"
            >
              <CrossIcon width={12} height={12} fill="white" />
            </button>
          </motion.div>
        ) : (
          <motion.button
            title="Support"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="rounded-full bg-orange-500 p-2.5"
            onClick={toggleCard}
          >
            {/* Replace with your Support icon */}
            <SupportIcon width={32} height={32} fill="black" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
