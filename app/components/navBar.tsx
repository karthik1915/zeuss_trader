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
    <div className="fixed top-0 w-screen flex justify-center z-50 bg-black">
      <div className="flex justify-between items-center p-3 w-full max-w-7xl">
        <div>
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={35} height={35} />
          </Link>
        </div>
        <SlidingMenu />
        <div className="sm:flex justify-between items-center gap-6 hidden">
          {children.map((child) => {
            return (
              <button
                className="hover:text-orange-400 text-xl "
                onClick={() => {
                  const element = document.querySelector(child[0]);
                  element?.scrollIntoView({ behavior: "smooth" });
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
            className="fixed flex flex-col items-center top-0 left-0 w-[70vw] h-full bg-gray-200 z-40"
          >
            <Image
              src="/logotext.png"
              width={300}
              height={50}
              alt="Zeuss Trader"
            />
            <div className="flex flex-col text-xl text-black gap-6">
              <button onClick={() => scrollTo("#home")}>HOME</button>
              <button onClick={() => scrollTo("#about")}>ABOUT US</button>
              <button onClick={() => scrollTo("#services")}>SERVICES</button>
              <button onClick={() => scrollTo("#gallery")}>GALLERY</button>
              <button onClick={() => scrollTo("#testimonials")}>
                TESTIMONIALS
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
