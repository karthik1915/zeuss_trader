"use client";
import Image from "next/image";
import Flickity from "react-flickity-component";
import ProvidedServiceList from "@/app/components/topics/providedServiceList";
import React from "react";

const Topics = (): React.ReactElement => {
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
      <p className="my-5 px-5 text-center font-RobotoSlab text-3xl font-semibold sm:text-4xl">
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
            <TopicsCard
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

export interface TopicsCaredProps {
  logo: string;
  title: string;
}

const TopicsCard = ({ logo, title }: TopicsCaredProps) => {
  return (
    <div className="mx-2 grid h-40 w-52 grid-rows-[50px,1fr] rounded-xl bg-zinc-300 p-4">
      <Image
        src={logo}
        alt={title}
        width={50}
        height={50}
        className="rounded-full bg-white p-3"
      />
      <p className="flex items-center font-bold">{title}</p>
    </div>
  );
};

export default Topics;
