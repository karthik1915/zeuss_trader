interface ServiceCardListProps {
  image: string;
  title: string;
  subtitle: string;
}

const ServiceCardList: ServiceCardListProps[] = [
  {
    image: "/market.png",
    title: "Equity Market",
    subtitle:
      "Learn About the equity analysis or stock market analysis and about the current trends of the share market with proper undestanding.",
  },
  {
    image: "/derivatives.png",
    title: "Derivative Markets",
    subtitle:
      "Derivative analysis training includes as how to learn and practically implement future and options, analysing out the call etc.",
  },
  {
    image: "/technical.png",
    title: "Commodity Market",
    subtitle:
      "Commodity share Maket / Stock Market training courses designed as how to use commodity Share / Stock Market platforms and implying the technical fundamentals in live Market.",
  },
  {
    image: "/analysis.png",
    title: "Technical Analysis",
    subtitle:
      "This module Covers the practical implementation of charts and patterns, oscillators. Bollingerbands, support levels, resistance levels, etc.",
  },
  {
    image: "/techniques.png",
    title: "Techniques & Statergies",
    subtitle:
      "At last, learn to implement differnet statergies in the stock market and learn how to make different statergies from scratch",
  },
];

export default ServiceCardList;
