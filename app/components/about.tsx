import React from "react";
import Image from "next/image";

interface AboutProps {}

function AboutUs({}: AboutProps): React.ReactElement {
  return (
    <div className="my-10" id="about">
      <p className="my-5 px-5 text-center font-RobotoSlab text-3xl font-semibold sm:text-4xl">
        About Us
      </p>
      <div className="flex justify-center">
        <Image src="/logotext.png" width={300} height={50} alt="Zeuss Trader" />
      </div>
      <div className="space-y-4 px-5 sm:text-lg md:text-xl">
        <p>
          &emsp;Welcome to Zeuss Trader, your gateway to mastering the dynamic
          world of trading and the stock market. With over 2 years of hands-on
          experience, we are dedicated to empowering individuals with the
          knowledge and skills needed to thrive in the financial markets.
        </p>
        <p>
          &emsp;At Zeuss Trader, we offer a diverse range of courses
          meticulously designed to cater to traders of all levels. From
          mastering the basics of the stock market to advanced strategies such
          as option buying, swing trading, and fundamental analysis, our
          curriculum covers it all. Our comprehensive courses include topics
          such as candlesticks, market structure, support and resistance,
          trendlines, patterns, option chain analysis, and much more.
        </p>
        <p>
          &emsp;What sets us apart is our unwavering commitment to providing
          lifelong guidance and mentorship. Our experienced mentors are here to
          support you every step of the way, ensuring that you have the tools
          and confidence to navigate the markets successfully.
        </p>
        <p>
          &emsp;Whether you&apos;re a beginner looking to dip your toes into the
          world of trading or an experienced trader seeking to refine your
          skills, Zeuss Trader is your trusted partner on your journey to
          financial independence.
        </p>
        <p>
          &emsp;Join us today and embark on a transformative learning experience
          that will empower you to achieve your trading goals. The objective of
          our vision is to eradicate unnecessary economic loopholes and increase
          financial awareness with relation to investing. Additionally, we are
          putting a lot of effort into being India&apos;s and Tamil Nadu&apos;s
          top stock market training institute.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
