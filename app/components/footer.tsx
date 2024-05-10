"use client";
import Link from "next/link";
import React from "react";

function Footer(): React.ReactElement {
  const scrollTo = (link: string) => {
    const element = document.querySelector(link);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="flex h-auto w-screen flex-col justify-between border-t border-black pt-5">
      <div className="grid h-auto w-full grid-cols-2 grid-rows-2 gap-y-3 md:grid-cols-4 md:grid-rows-1">
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
          <button onClick={() => scrollTo("#testimonials")}>
            TESTIMONIALS
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-bold">CONTACT</p>
          <p>+91 8056054719</p>
          <p>zeusstrader@gmail.com</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-lg font-bold">CONNECT</p>
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

export default Footer;
