import { JSXElementConstructor, SVGProps } from "react";
import {
  CallIcon,
  LocationIcon,
  MailIcon,
  TimeIcon,
} from "@/app/constants/icons";

export interface ContactDetailProps {
  title: string;
  content: string;
  Icon: JSXElementConstructor<SVGProps<SVGSVGElement>>;
}

const ContactList: ContactDetailProps[] = [
  {
    title: "Our Office Address",
    content:
      "No. 2/14, Round Building, Collector Nagar Bus Stand, Anna Nagar West Extenstion,Chennai-600101",
    Icon: LocationIcon,
  },
  {
    title: "General Enquiries",
    content: "zeusstrader@gmail.com",
    Icon: MailIcon,
  },
  {
    title: "Call Us",
    content: "+91 6382980289 , +91 8072285207",
    Icon: CallIcon,
  },
  {
    title: "Our Timing",
    content: "Mon-Fri: 9am-6pm",
    Icon: TimeIcon,
  },
];

export default ContactList;
