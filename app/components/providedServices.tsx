"use client";
import Image from "next/image";
import Flickity from "react-flickity-component";
import ProvidedServiceList from "@/app/constants/providedServiceList";
import React from "react";

const ProvidedServices = (): React.ReactElement => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Carousel />
    </div>
  );
};

const flickityOptions = {
  initialIndex: 0,
  groupCells: 1,
  autoPlay: true,
  wrapAround: true,
};

function Carousel() {
  return (
    <>
      <p className="font-RobotoSlab text-3xl my-5 px-5 text-center sm:text-4xl font-semibold">
        Topics
      </p>
      <Flickity
        className={"carousel outline-none"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {ProvidedServiceList.map((service) => {
          return (
            <ServicesCard
              key={service.title}
              title={service.title}
              logo={`/svg/${service.logo}`}
            />
          );
        })}
      </Flickity>
    </>
  );
}

export interface ServiceCardProps {
  logo: string;
  title: string;
}

const ServicesCard = ({ logo, title }: ServiceCardProps) => {
  return (
    <div className="w-52 bg-zinc-300 p-4 rounded-xl mx-2 h-40 grid grid-rows-[50px,1fr]">
      <Image
        src={logo}
        alt={title}
        width={50}
        height={50}
        className="p-3 bg-white rounded-full"
      />
      <p className="font-bold flex items-center">{title}</p>
    </div>
  );
};

export default ProvidedServices;
