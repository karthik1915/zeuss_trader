"use client";
import Link from "next/link";
import React, { JSXElementConstructor, SVGProps } from "react";
import connectLinkList from "./connectLinks";

function Footer(): React.ReactElement {
  const scrollTo = (link: string) => {
    const element = document.querySelector(link);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="flex h-auto w-screen flex-col justify-between border-t border-black pt-5">
      <div className="mb-4 grid h-auto w-full grid-cols-2 grid-rows-2 gap-y-3 md:grid-cols-4 md:grid-rows-1">
        <div className="flex flex-col items-center gap-2 ">
          <p className="text-lg font-bold">USEFUL LINKS</p>
          <Link href={"/privacy-policy"}>PRIVACY POLICY</Link>
          <button onClick={() => scrollTo("#services")}>SERVICES</button>
          <button onClick={() => scrollTo("#gallery")}>GALLERY</button>
          <button onClick={() => scrollTo("#contact")}>CONTACT US</button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button onClick={() => scrollTo("#home")}>HOME</button>
          <button onClick={() => scrollTo("#about")}>ABOUT US</button>
          <button
            onClick={() => {
              window.location.href = "/blogs";
            }}
          >
            BLOGS
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-bold">CONTACT</p>
          <p>+91 6382980289</p>
          <p>+91 8072285207</p>
          <p>zeusstrader@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-bold">CONNECT</p>
          <div className="flex gap-2">
            {connectLinkList.map((list, index) => {
              return (
                <ConnectLink
                  title={list.title}
                  key={index}
                  onClick={list.onClick}
                  Icon={list.Icon}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full justify-center gap-4 border-t border-black px-4 pb-4 pt-5">
        <div className="max-w-5xl">
          <p className=" animate-pulse text-xl font-bold text-red-700">
            DISCLAIMER :
          </p>
          <p className="sm:text-sm md:text-lg">
            The information provided on the Zeus Trader website is for
            educational and informational purposes only. We do not provide
            financial, investment, or trading advice. Trading in the stock
            market involves risk, and past performance is not indicative of
            future results. The content on our website is based on our personal
            experience and research. We are not providing legal, accounting, or
            financial advisory services, and this is not a solicitation or
            recommendation to buy or sell any stocks, options, or other
            financial instruments or investments.
          </p>
        </div>
      </div>
      <div className="flex w-full justify-center gap-4 bg-orange-500 py-2">
        <p>&copy; Copyrights 2024</p>
        <p>ZEUSS TRADER</p>
        <p>All Rights Reserved</p>
      </div>
    </footer>
  );
}

export interface ConnectLinkType {
  title: string;
  Icon: JSXElementConstructor<SVGProps<SVGSVGElement>>;
  onClick: () => void;
}

const ConnectLink = ({ title, onClick, Icon }: ConnectLinkType) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className="rounded-full bg-gray-300 p-1 hover:bg-gray-400"
    >
      <Icon fill="black" width={34} height={34} />
    </button>
  );
};

export default Footer;
