import { GmailIcon, InstagramIcon, YoutTubeIcon } from "@/app/constants/icons";
import { ConnectLinkType } from ".";

const connectLinkList: ConnectLinkType[] = [
  {
    title: "Youtube",
    Icon: YoutTubeIcon,
    onClick: () => {
      window.open("https://youtube.com/@zeusstrader", "_blank");
    },
  },
  {
    title: "Instagram",
    Icon: InstagramIcon,
    onClick: () => {
      window.open("https://www.instagram.com/zeuss_trader_", "_blank");
    },
  },
  {
    title: "Gmail",
    Icon: GmailIcon,
    onClick: () => {
      const email = "zeusstrader@gmail.com";
      const subject = encodeURIComponent("Email sent via Zeusstrader Website");
      const body = encodeURIComponent("");

      const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
      window.open(gmailUrl, "_blank");
    },
  },
];
export default connectLinkList;
