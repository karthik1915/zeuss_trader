"use client";
import React from "react";
import ContactList, { ContactDetailProps } from "../constants/contactList";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { ContactForm } from "./forms";

function Contact(): React.ReactElement {
  return (
    <div className="my-10" id="contact">
      <p className="font-RobotoSlab text-3xl my-5 px-5 text-center sm:text-4xl font-semibold">
        Contact
      </p>
      <div className="grid lg:grid-cols-[600px,1fr] lg:grid-rows-1 grid-rows-[400px,1fr] px-3 gap-y-3">
        <iframe
          src="https://maps.google.com/maps?width=100%25&height=100%&hl=en&q=No.2/14,%20Bus%20Stand,%20Collector%20Nagar%20Rd,%20Radial%20Nagar,%20Anna%20Nagar%20West%20Extension,%20Chennai,%20Tamil%20Nadu%20600101%20+(Zeuss%20Trader)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          width="100%"
          height="100%"
          loading="lazy"
        ></iframe>
        <div className="flex flex-col p-3 justify-evenly gap-2">
          {ContactList.map((contact) => {
            return (
              <ContactDetail
                key={contact.title}
                title={contact.title}
                content={contact.content}
                Icon={contact.Icon}
              />
            );
          })}
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

const ContactDetail = ({ title, content, Icon }: ContactDetailProps) => {
  const { ref, inView } = useInView({ threshold: 0 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-[60px,1fr]"
    >
      <div className="flex items-start justify-center mt-3">
        <Icon width={30} height={30} fill="orange" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-lg">{title}</p>
        <p className="">{content}</p>
      </div>
    </motion.div>
  );
};

export default Contact;
