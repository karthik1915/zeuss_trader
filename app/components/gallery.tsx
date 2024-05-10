import Image from "next/image";
import React from "react";

interface GalleryProps {}

function Gallery({}: GalleryProps): React.ReactElement {
  const images = [];

  for (let i = 1; i <= 5; i++) {
    images.push(
      <Image
        key={i}
        src={`/gallery/${i}.jpg`}
        alt={`${i}th Image`}
        width={500}
        height={500}
        className="mx-auto rounded-xl"
      />,
    );
  }
  return (
    <div className="my-10" id="gallery">
      <p className="my-5 px-5 text-center font-RobotoSlab text-3xl font-semibold sm:text-4xl">
        Gallery
      </p>
      <div className="grid grid-cols-2 grid-rows-3 gap-3">{images}</div>
    </div>
  );
}

export default Gallery;
