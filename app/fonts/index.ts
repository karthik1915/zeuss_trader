import localFont from "next/font/local";

export const VarelaRound = localFont({
  src: [
    {
      path: "./VarelaRound-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const RobotoSlab = localFont({
  variable: "--heading-font",
  src: [
    {
      path: "./RobotoSlab-VariableFont_wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./RobotoSlab-VariableFont_wght.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./RobotoSlab-VariableFont_wght.ttf",
      weight: "600",
      style: "semibold",
    },
  ],
});
