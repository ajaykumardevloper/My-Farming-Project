// import Image from "next/image";
import { DashboardNav } from "../dashboard/DashboardNav";
import { AboutContent } from "./AboutContent";
import { FooterLast } from "../hero/FooterLast";


export default function about() {
  return (
    <>
      <DashboardNav />
      
      <div className="fixed -z-[99px] top-10 w-full ">
        <video autoPlay loop muted >
          <source src="/About1.mp4" type="video/mp4" />
        </video>
        {/* <img src="/about.jpg" alt="" className="h-[] w-full object-cover" /> */}
        <div className="absolute flex justify-center items-center top-20 ">
          {/* <div className="flex flex-col justify-center gap-5 p-5 rounded-2xl w-[70%]   bg-[#747d8c]">
            <h1 className="text-4xl font-extrabold  text-start text-slate-800 ">
              Crafted for Startup SaaS and business Sites
            </h1>
          </div> */}
        </div>
      </div>
      <AboutContent/>
      <FooterLast/>
    </>
  );
}
