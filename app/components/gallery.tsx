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
      />
    );
  }
  return (
    <div className="my-10" id="gallery">
      <p className="font-RobotoSlab text-3xl my-5 px-5 text-center sm:text-4xl font-semibold">
        Gallery
      </p>
      <div className="grid grid-rows-3 grid-cols-2 gap-3">{images}</div>
    </div>
  );
}

export default Gallery;
