import React from "react";
import Image from "next/image";
import ServiceCardList from "@/app/constants/serviceCardList";

function Services(): React.ReactElement {
  return (
    <div className="my-10" id="services">
      <p className="font-RobotoSlab text-3xl my-5 px-5 text-center sm:text-4xl font-semibold">
        Services
      </p>
      <div className="grid grid-rows-2 md:grid-cols-3 grid-cols-2">
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
    <div className="relative h-[200px] sm:h-[320px] mx-2 my-3 rounded-xl overflow-hidden">
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
        <div className="flex flex-col justify-evenly h-full sm:px-3 ">
          <p className="text-md font-semibold sm:text-xl text-white">
            {heading}
          </p>
          <p className="text-xs opacity-85 sm:text-lg text-white overflow-ellipsis">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
