import Image from "next/image";
import React, { useEffect, useState } from "react";

interface ImageSliderProps {
  interval: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ interval }) => {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [images, interval]);

  return (
    <div className="">
      <div className="flex justify-center  h-screen">
        <Image
          alt={`Slide ${currentImageIndex}`}
          src={images[currentImageIndex]}
          width={500}
          height={500}
          //   layout="fill"
          // objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ImageSlider;
