"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { SVGProps } from "react";
import { CrossIcon, WhatappIconBig, WhatsappIcon } from "../constants/icons";

function ContactOverlay(): React.ReactElement {
  const [showCard, setShowCard] = useState(true);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div className="fixed bottom-6 right-8">
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
              <Support width={40} height={40} fill="black" />
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
              onClick={toggleCard}
              className="absolute -right-2 -top-2 rounded-full bg-orange-500 p-2 text-white hover:bg-orange-600"
            >
              <CrossIcon width={12} height={12} fill="white" />
            </button>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="rounded-full bg-orange-500 p-2.5"
            onClick={toggleCard}
          >
            {/* Replace with your Support icon */}
            <Support width={32} height={32} fill="black" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export const WhatsAppOverlay = () => {
  const [open, setopen] = useState<boolean>(false);

  function openWhatsapp() {
    const url = "https://wa.me/6382980289";
    window.open(url, "_blank");
  }

  return (
    <>
      <button
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

const Support = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox="0 0 24 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.9998 22.2001C11.1953 22.2003 10.4203 21.8974 9.82904 21.3518C9.23781 20.8063 8.87376 20.058 8.8094 19.2561C6.6753 18.5007 4.87668 17.0156 3.73104 15.0631C2.5854 13.1105 2.1664 10.816 2.54801 8.58452C2.92961 6.35307 4.08728 4.32817 5.81667 2.86727C7.54606 1.40637 9.73596 0.603394 11.9998 0.600098C14.4076 0.599749 16.7277 1.50424 18.4999 3.13422C20.2721 4.7642 21.3672 7.00064 21.5678 9.4001C21.5745 9.50418 21.5595 9.60851 21.5236 9.70646C21.4878 9.80441 21.4321 9.89385 21.3598 9.96909C21.2876 10.0443 21.2005 10.1037 21.1041 10.1435C21.0077 10.1832 20.9041 10.2025 20.7998 10.2001C20.5855 10.1947 20.3808 10.1099 20.2256 9.96202C20.0703 9.81417 19.9756 9.61389 19.9598 9.4001C19.8173 7.98543 19.3004 6.63431 18.4622 5.48581C17.624 4.33732 16.4949 3.43296 15.1911 2.86584C13.8872 2.29871 12.4558 2.08932 11.0442 2.25921C9.63255 2.4291 8.29169 2.97214 7.15966 3.83242C6.02762 4.69269 5.14532 5.83913 4.60357 7.1537C4.06182 8.46827 3.8802 9.90346 4.07742 11.3115C4.27463 12.7196 4.84355 14.0497 5.72561 15.1649C6.60767 16.28 7.77099 17.1399 9.09581 17.6561C9.33687 17.1352 9.71358 16.6888 10.1865 16.3635C10.6594 16.0383 11.2111 15.8462 11.7837 15.8074C12.3563 15.7686 12.9289 15.8846 13.4413 16.1431C13.9537 16.4017 14.3872 16.7932 14.6963 17.2769C15.0053 17.7605 15.1787 18.3184 15.1981 18.892C15.2174 19.4656 15.0822 20.0339 14.8065 20.5373C14.5308 21.0407 14.1248 21.4607 13.631 21.7532C13.1372 22.0458 12.5738 22.2001 11.9998 22.2001ZM4.0142 18.2001H4.1598C4.7838 18.8097 5.4766 19.3473 6.22701 19.8001H4.0142C3.1166 19.8001 2.3998 20.5153 2.3998 21.4001C2.3998 23.4945 3.395 25.0545 5.0766 26.1249C6.7886 27.2177 9.2238 27.8001 11.9998 27.8001C14.7758 27.8001 17.211 27.2177 18.923 26.1249C20.603 25.0529 21.5998 23.4961 21.5998 21.4001C21.5998 20.9757 21.4312 20.5688 21.1312 20.2687C20.8311 19.9687 20.4242 19.8001 19.9998 19.8001H16.7342C16.8237 19.2705 16.8237 18.7297 16.7342 18.2001H19.9998C20.8485 18.2001 21.6624 18.5372 22.2625 19.1374C22.8627 19.7375 23.1998 20.5514 23.1998 21.4001C23.1998 24.1057 21.867 26.1457 19.7838 27.4753C17.7326 28.7825 14.9678 29.4001 11.9998 29.4001C9.03181 29.4001 6.267 28.7825 4.21581 27.4753C2.1326 26.1473 0.799805 24.1041 0.799805 21.4001C0.799805 19.6193 2.2446 18.2001 4.0142 18.2001ZM18.3998 10.2001C18.4002 11.2827 18.1259 12.3477 17.6026 13.2955C17.0793 14.2433 16.3242 15.0428 15.4078 15.6193C14.9807 15.1886 14.4757 14.8428 13.9198 14.6001C14.9305 14.159 15.7585 13.3833 16.2645 12.4036C16.7706 11.4238 16.9239 10.2996 16.6986 9.22014C16.4733 8.14065 15.8831 7.17165 15.0274 6.47609C14.1717 5.78053 13.1026 5.40082 11.9998 5.40082C10.8971 5.40082 9.82793 5.78053 8.97221 6.47609C8.11648 7.17165 7.52636 8.14065 7.30105 9.22014C7.07575 10.2996 7.22901 11.4238 7.73507 12.4036C8.24113 13.3833 9.06911 14.159 10.0798 14.6001C9.5198 14.8449 9.0158 15.1921 8.5918 15.6193C7.37648 14.855 6.45342 13.7043 5.971 12.3521C5.7249 11.6613 5.59934 10.9334 5.5998 10.2001C5.5998 8.50271 6.27409 6.87485 7.47432 5.67461C8.67455 4.47438 10.3024 3.8001 11.9998 3.8001C13.6972 3.8001 15.3251 4.47438 16.5253 5.67461C17.7255 6.87485 18.3998 8.50271 18.3998 10.2001Z"
      fill={props.fill}
    />
  </svg>
);

export default ContactOverlay;
