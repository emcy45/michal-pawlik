import React, { useEffect, useState } from "react";

import Image from "next/image";

interface ImageSliderProps {
  interval: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ interval }) => {
  const images = [
    {
      src: "/images/slide5.jpg",

      caption: "Wrocław - Stadion Olimpijski",
      mapLink:
        "https://www.google.com/maps/place/Stadion+Olimpijski/@51.1189777,17.0596168,14z/data=!3m1!4b1!4m6!3m5!1s0x470fc56b824ebd5d:0xc9e3a8a290cbfb6f!8m2!3d51.1189835!4d17.0965246!16s%2Fg%2F11fjnb2zz9?entry=ttu",
    },
    {
      src: "/images/slide6.jpg",

      caption: "Las Rędziński",
      mapLink:
        "https://www.google.pl/maps/place/Las+R%C4%99dzi%C5%84ski/@51.1714575,16.9428757,15.75z/data=!4m6!3m5!1s0x470feae2d745b6f1:0xadbeeba3702f721a!8m2!3d51.1648551!4d16.9498895!16s%2Fg%2F122_4plc?entry=ttu",
    },
    {
      src: "/images/slide7.jpg",

      caption: "Babia Góra, Beskid Żywiecki",
      mapLink:
        "https://www.google.pl/maps/place/Babia+G%C3%B3ra/@49.5731883,19.5101969,14z/data=!3m1!4b1!4m6!3m5!1s0x4715d16a4efe96d7:0x95aad3bd66b951e1!8m2!3d49.5731628!4d19.5307964!16zL20vMDI3aHRq?entry=ttu",
    },
    {
      src: "/images/slide4.jpg",

      caption: "Zakynthos, Kalamaki",
      mapLink:
        "https://www.google.com/maps/place/Aussichtspunkt/@37.737098,20.9029956,947m/data=!3m1!1e3!4m14!1m7!3m6!1s0x136740cadc7b5abf:0x27a074dbe04c2ad1!2sZakintos!8m2!3d37.7870331!4d20.8998759!16zL20vMDF0MG4y!3m5!1s0x13673769bc3e1593:0x1e5f3498a3995546!8m2!3d37.736718!4d20.9045517!16s%2Fg%2F11v0b6zf4s?entry=ttu",
    },
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

  const ImageStyles = {
    display: "flex",
    justifyContent: "center",
    borderRadius: "16px",
    margin: "20px 0px",
  };

  return (
    <div className="z-10">
      <div className="flex justify-center h-screen">
        <div style={{ position: "relative" }}>
          <Image
            alt={images[currentImageIndex].caption}
            src={images[currentImageIndex].src}
            height={500}
            width={500}
            style={ImageStyles}
          />
          <p
            style={{
              position: "absolute",
              bottom: 20,
              left: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              textAlign: "center",
              padding: "8px",
              borderRadius: "0px 0px 16px 16px",
            }}
          >
            <a
              href={images[currentImageIndex].mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {images[currentImageIndex].caption}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
