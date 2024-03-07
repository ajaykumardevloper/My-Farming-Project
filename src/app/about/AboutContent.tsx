"use client";
import React, { useState } from "react";
import { FooterLast } from "../hero/FooterLast";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { Image } from "@nextui-org/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AboutContent = () => {
  const [conterOn, setCounterOn] = useState(false);
  return (
    <>
      <div>
        <div className="  relative top-[500px]  w-full bg-white h-[900px]">
          <div className="absolute right-0 top-[400px] h-96 w-[650px] blur-sm">
            <img src="images/a3.png" alt="" className="" />
          </div>
          <div className="p-10 drop-shadow-2xl bg-gray-200 relative w-[60%] h-[500px] left-20 top-20">
            <div className="absolute  w-[500px] ">
              <h1 className="text-xl font-medium">WHO WE ARE</h1>
              <h1 className="py-8 text-4xl font-semibold">
                Beautiful landscapes and the farmers Who bring us our food
              </h1>
              <p className="font-medium">
              Farmi Technology Private Limited
               - Innovators dedicated to empowering 
               small-scale farmers through sustainable practices and cutting
               -edge solutions, cultivating a thriving and sustainable future for agriculture.
               </p>
              <button className="font-medium mt-14 ml-40 p-4 px-6 rounded-full hover:bg-green-500 hover:text-white border-2 border-green-500">
                About More
              </button>
            </div>
            <div className="left-[530px] top-10 relative h-[500px] w-[400px] drop-shadow-xl ">
              <img src="images/a1.jpg" alt="" className="drop-shadow-xl" />
              <div className="absolute h-60 w-60 -top-20 -right-20 p-4 bg-gray-100 rounded-full shadow-2xl">
                <img
                  src="images/a2.jpg"
                  alt=""
                  className="shadow-3xl rounded-full shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="absolute top-[650px]  left-40 flex gap-14 ">
            <div className=" border-r-4  pr-10">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h1 className="text-5xl font-extrabold ">
                  {conterOn && (
                    <CountUp start={0} end={8600} duration={2} delay={0} />
                  )}
                  +
                </h1>
                <p className="pt-3 font-medium pl-3">Tons of harvesta</p>
              </ScrollTrigger>
            </div>

            <div className="mr-5">
              <ScrollTrigger
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <h1 className="text-5xl  font-extrabold ">
                  {conterOn && (
                    <CountUp start={0} end={100} duration={2} delay={0} />
                  )}
                  %
                </h1>
                <p className="pt-3 font-medium pl-1">Organic Product</p>
              </ScrollTrigger>
            </div>
          </div>
          <div className="absolute px-10 pt-20 top-[90%] z-99 bg-slate-200 w-full h-[850px]">
            <div className=" flex justify-between  gap-32 ">
              <img
                src="images/a4.png"
                className="h-[700px] drop-shadow-2xl "
                alt=""
              />
              <div className=" py-20  ">
                <h1 className="text-5xl font-semibold mb-14">Work with Us</h1>
                <p className="text-base font-light">
                Join our team of passionate individuals committed to making a difference in agriculture.
                Together, we can drive innovation, create impact, and shape the future of farming.
                Explore our career opportunities and be a part of the Farmi family!
                </p>
                <div className="mt-10">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">
                        Do I need a business plan?
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-light">
                      Absolutely! A business plan serves as a roadmap for your agricultural venture, outlining your goals, strategies, and financial projections. It provides clarity, attracts investors, and ensures a structured approach to achieving success in the competitive farming industry.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-semibold">
                        How long should a business plan be?
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-light">
                      A concise and effective business plan typically ranges from 15 to 30 pages. Keep it focused on essential details like your mission, market analysis, and financial projections. Quality over quantity is key.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-semibold">
                        Where do I start?
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-light">
                      Starting your business journey begins with a well-crafted business plan. Identify your goals, understand your market, outline your strategies, and create a solid financial plan. It's the foundation for a successful and sustainable agricultural venture.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg font-semibold">
                      Why Choose Farmi?
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-light">
                      Farmi Technology Private Limited stands out as a beacon of innovation in the agricultural sector. Our commitment to sustainable farming, cutting-edge solutions, and personalized guidance sets us apart. Join us in revolutionizing agriculture and shaping a greener, smarter future.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute text-center top-[1650px]  text-white w-full h-[600px]">
            <div className="text-black bg-[#acacb8] container px-10">
              <h1 className=" text-4xl font-bold py-10">Open Farm</h1>
              <p className="w-[70%] ml-[170px] font-medium pb-10 ">
              Explore the possibilities of sustainable farming with Open Farm by Farmi.
              Our platform invites farmers, enthusiasts, and communities to connect, share knowledge, and embrace the spirit of open agriculture.
              Collaborate, learn, and grow together towards a more sustainable and bountiful future. 
              Open Farm - where knowledge meets cultivation!
              </p>
            </div>
            
            
          </div>
          <div className="absolute  top-[1900px] bg-[#7d7d90] text-white w-full h-[1040px]">
            <div className="text-center mt-10">
              <h1 className="mb-7 text-2xl font-medium">OUR GALLERY</h1>
              <h2 className="text-5xl font-semibold">
                Latest projects showcase
              </h2>
            </div>
            <div className="flex justify-center gap-10 items-center mt-20">
              <Image
                isZoomed
                width={240}
                alt="NextUI Fruit Image with Zoom"
                src="images/card4.jpeg"
                className="rounded-2xl"
              />
              <Image
                isZoomed
                width={240}
                alt="NextUI Fruit Image with Zoom"
                src="images/card3.jpeg"
                className="rounded-2xl"
              />
              <Image
                isZoomed
                width={240}
                alt="NextUI Fruit Image with Zoom"
                src="images/card2.jpeg"
                className="rounded-2xl"
              />
              <Image
                isZoomed
                width={240}
                alt="NextUI Fruit Image with Zoom"
                src="images/card1.jpeg"
                className="rounded-2xl"
              />
            </div>
            <FooterLast />
          </div>
          
        </div>

        
      </div>
    </>
  );
};
