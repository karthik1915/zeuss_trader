import React from "react";
import Image from "next/image";
import ServiceCardList from "@/app/components/services/serviceList";

function Services(): React.ReactElement {
  return (
    <div className="my-10" id="services">
      <p className="my-5 px-5 text-center font-RobotoSlab text-3xl font-semibold sm:text-4xl">
        Services
      </p>
      <div className="grid grid-cols-2 grid-rows-2  md:grid-cols-3">
        {ServiceCardList.map((service) => {
          return (
            <ServiceCard
              image={service.image}
              key={service.title}
              heading={service.title}
              content={service.subtitle}
            />
          );
        })}
      </div>
    </div>
  );
}

interface ServiceCardProps {
  image: string;
  heading: string;
  content: string;
}
const ServiceCard = ({
  heading,
  image,
  content,
}: ServiceCardProps): React.ReactElement => {
  return (
    <div className=" relative mx-2 my-3 h-[200px]  transform overflow-hidden rounded-xl transition  duration-300 ease-in-out hover:scale-105 hover:shadow-2xl sm:h-[320px]">
      <div className="absolute inset-0 bg-black"></div>
      {/* Black overlay */}
      <Image
        src={image}
        alt={heading}
        className="absolute inset-0 rounded-t-xl opacity-30"
        style={{
          width: "100%",
          height: "320px",
          objectFit: "cover",
        }}
        width={500}
        height={200}
      />
      <div className="absolute inset-0 p-1">
        <div className="flex h-full flex-col justify-evenly sm:px-3 ">
          <p className="text-md font-semibold text-white sm:text-xl">
            {heading}
          </p>
          <p className="overflow-ellipsis text-xs text-white opacity-85 sm:text-lg">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
