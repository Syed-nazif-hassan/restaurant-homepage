"use client";

import Image from "next/image";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";

export default function ImagesForHome() {
  const images = [
    { path: image1, aspectRatio: "aspect-video" },
    { path: image4, aspectRatio: "aspect-square" },
    { path: image3, aspectRatio: "aspect-square" },
    { path: image5, aspectRatio: "aspect-video" },
    { path: image6, aspectRatio: "aspect-video" },
    { path: image2, aspectRatio: "aspect-square" },
    { path: image7, aspectRatio: "aspect-square" },
    { path: image8, aspectRatio: "aspect-video" },
  ];
  return (
    <div className="mx-10 my-20">
      <h2 className="mb-14 text-pretty text-center font-['Playfair'] text-2xl">
        Enjoy your time at Bistro Verve
      </h2>
      <div className="columns-4 max-[1050px]:columns-2 max-[680px]:columns-1">
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              src={image.path}
              alt="Bistro Verve Image"
              placeholder="blur"
              quality={75}
              className={`${image.aspectRatio} mb-5 w-full select-none object-cover object-center`}
            />
          );
        })}
      </div>
    </div>
  );
}
