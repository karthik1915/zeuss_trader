"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon } from "../constants/icons";
import { AnimatePresence, motion } from "framer-motion";

interface NavBarProps {
  children: [string, string][];
}

function NavBar({ children }: NavBarProps): React.ReactElement {
  return (
    <div className="fixed top-0 z-50 flex w-screen justify-center bg-black">
      <div className="flex w-full max-w-7xl items-center justify-between p-3">
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={35} height={35} />
          </Link>
        </div>
        <SlidingMenu />
        <div className="hidden items-center justify-between gap-6 sm:flex">
          {children.map((child) => {
            return (
              <button
                className="text-xl hover:text-orange-400 "
                onClick={() => {
                  if (child[0].startsWith("/")) {
                    window.location.href = child[0];
                  } else {
                    const element = document.querySelector(child[0]);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                key={child[1]}
              >
                {child[1]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SlidingMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollTo = (link: string) => {
    const element = document.querySelector(link);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <div>
      <button className="sm:hidden" onClick={toggleMenu}>
        <MenuIcon width={20} height={20} fill="white" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.5 }}
            className="fixed left-0 top-0 z-40 flex h-full w-[70vw] flex-col items-center bg-gray-200"
          >
            <Image
              src="/logotext.png"
              width={300}
              height={50}
              alt="Zeuss Trader"
            />
            <div className="flex flex-col gap-6 text-xl text-black">
              <button onClick={() => scrollTo("#home")}>HOME</button>
              <button onClick={() => scrollTo("#about")}>ABOUT US</button>
              <button onClick={() => scrollTo("#services")}>SERVICES</button>
              <button onClick={() => scrollTo("#gallery")}>GALLERY</button>
              <button
                onClick={() => {
                  window.location.href = "/blogs";
                }}
              >
                BLOGS
              </button>
              <button onClick={() => scrollTo("#contact")}>CONTACT</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavBar;
