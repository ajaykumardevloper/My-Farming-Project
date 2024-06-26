import React from "react";
import { images } from "./constants";
import left from "../public/left.svg";
import right from "../public/right.svg";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  activeImage: any;
  clickNext: any;
  clickPrev: any;
};

const Description = ({ activeImage, clickNext, clickPrev }: Props) => {
  return (
    <div className="grid place-items-start w-full bg-blue-600 relative md:rounded-tr-3xl md:rounded-br-3xl">
      <div className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
       
      </div>
      {images.map((elem, idx) => (
        <div
          key={idx}
          className={`${
            idx === activeImage
              ? "block w-full h-full md:h-[80vh] py-20 md:px-20 px-10 text-left"
              : "hidden"
          }`}
        >
          <motion.div
            initial={{
              opacity: idx === activeImage ? 0 : 0.5,
              scale: idx === activeImage ? 0.5 : 0.3,
            }}
            animate={{
              opacity: idx === activeImage ? 1 : 0.5,
              scale: idx === activeImage ? 1 : 0.3,
            }}
            transition={{
              ease: "linear",
              duration: 2,
              x: { duration: 1 },
            }}
            className="w-full"
          >
            <div className="py-16 text-5xl text-gray-100 font-extrabold">{elem.title}</div>
            <div className="leading-relaxed font-medium text-base tracking-wide h-60 md:h-40 italic text-gray-100">
              {" "}
              {elem.desc}
            </div>
          </motion.div>

          
          <div className="absolute md:bottom-1 bottom-10 right-10  w-full flex justify-center items-center">
            <div
              className="absolute bottom-2 hover:bg-black rounded-full right-10 cursor-pointer"
              onClick={clickPrev}
            >
              <img src="left.svg" alt="" />
            </div>

            <div
              className="absolute  hover:bg-black rounded-full  bottom-2 right-2 cursor-pointer"
              onClick={clickNext}
            >
              <img src="right.svg "alt="" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Description;