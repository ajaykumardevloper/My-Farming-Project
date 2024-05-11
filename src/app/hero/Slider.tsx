"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { images } from "./constants";
import Description from "./Decription";
import Link from "next/link";
// import Description from "./Description";

const Slider = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage, clickNext]);
  return (
    <>
      <Link href="https://app.droxy.ai/guest-chatbot/663ae90b90120109edf77d01">
        <div className="fixed bottom-4 right-4 z-50 animate-bounce">
          <Image src={"/chatB.svg"} alt="hero" width={200} height={200} />
        </div>
      </Link>
      <main className=" grid pt-20 place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl drop-shadow-2xl rounded-2xl">
        <div
          className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
        >
          {images.map((elem, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out "
                  : "hidden"
              }`}
            >
              <Image
                src={elem.src}
                alt=""
                width={400}
                height={400}
                className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
              />
            </div>
          ))}
        </div>
        <Description 
          activeImage={activeImage}
          clickNext={clickNext}
          clickPrev={clickPrev}
        />
      </main>
    </>
  );
};

export default Slider;
