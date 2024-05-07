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
              Empowering Minds, Enriching Lives: Our Journey to Wellness
              </h1>
              <p className="font-medium">
              CalmCare Solutions pioneers the fusion of AI technology with mental wellness support. Our mission is to make empathetic, personalized mental health care accessible to everyone, anywhere. With a focus on innovation and empathy, we're dedicated to empowering individuals towards a healthier, more balanced life.
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
                <p className="pt-3 font-medium pl-3">Wellness Journeys Started</p>
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
                <p className="pt-3 font-medium pl-1"> Personalized Support</p>
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
                Join our team of dedicated individuals transforming mental health care. Together, we drive innovation, create impact, and shape the future of wellness. Explore our career opportunities and be part of the CalmCare family!
                </p>
                <div className="mt-10">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-lg font-semibold">
                        Do I need a business plan?
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-light">
                      While not always mandatory, a well-crafted business plan can serve as a roadmap for your venture, guiding decision-making, attracting investors, and ensuring long-term success.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-lg font-semibold">
                        How long should a business plan be?
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-light">
                      The length of your business plan depends on various factors, but it typically ranges from 20 to 30 pages. Focus on including essential information while keeping it concise and impactful.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-lg font-semibold">
                        Where do I start?
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-light">
                      Start by outlining your business idea, conducting market research, identifying your target audience, and defining your unique value proposition. From there, create sections covering your business model, marketing strategy, operations plan, and financial projections.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-lg font-semibold">
                      Why Choose Calmcare?
                      </AccordionTrigger>
                      <AccordionContent className="text-base font-light">
                      CalmCare Solutions leverages cutting-edge AI technology to provide personalized mental health support, ensuring tailored interventions and improved outcomes.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute text-center top-[1650px]  text-white w-full h-[600px]">
            <div className="text-black bg-[#acacb8] container px-10">
              <h1 className=" text-4xl font-bold py-10">Wellness Hub</h1>
              <p className="w-[70%] ml-[170px] font-medium pb-10 ">
              Discover a sanctuary for mental well-being with Wellness Hub by CalmCare Solutions. Our platform invites individuals, therapists, and communities to connect, share resources, and embark on a journey of self-discovery and growth. Collaborate, learn, and thrive together towards a healthier and more balanced life. Wellness Hub - where support meets empowerment!
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
