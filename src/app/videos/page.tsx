"use client";
import * as React from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import { FooterLast } from "../hero/FooterLast";
import Link from "next/link";

export default function page() {
  return (
    <>
      <DashboardNav />
      <div className="mt-20 text-center">
      <h1 className="font-bold text-4xl text-center">
     <span className="border-b-4 border-green-500"> Mental Wellness Tv</span>
            </h1>
            <p className="text-center mt-5">
            Grow Knowledge through Mindful Videos
          </p>
      </div>
      <div className="my-20 mx-10  grid grid-cols-4 gap-14">
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
        <h1 className="font-bold text-2xl px-5 text-center">Mindful Moments: Daily Wellness Practices</h1>
          <Link href="./video1"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 mt-5 font-semibold rounded-xl">Click</button></Link>
        </div>
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
        <h1 className="font-bold text-2xl px-5 text-center">Mental Health Matters: Expert Insights</h1>
          <Link href="./video2"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 mt-5 font-semibold rounded-xl">Click</button></Link>
        </div>
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
        <h1 className="font-bold text-2xl px-5 text-center">Empowerment Talks: Personal Growth Discussions</h1>
          <Link href="./video3"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 mt-5 font-semibold rounded-xl">Click</button></Link>
        </div>
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
        <h1 className="font-bold text-2xl px-5 text-center">Wellness Wisdom: Holistic Health Tips</h1>
          <Link href="./video4"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 mt-5 font-semibold rounded-xl">Click</button></Link>
        </div>
        {/* <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
          <Link href="./video2"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 font-semibold rounded-xl">Click</button></Link>
          <h1 className="font-bold text-2xl mt-5">Harvesting Tips for Terrace Garden</h1>
        </div>
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
          <Link href="./video3"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 font-semibold rounded-xl">Click</button></Link>
          <h1 className="font-bold text-2xl mt-5">Beginner's Farming Essentials</h1>
        </div>
        <div className=" bg-slate-300 py-5 flex flex-col items-center justify-center rounded-lg">
          <Link href="./video4"><button className="bg-green-600 hover:bg-green-400 text-white px-9 py-3 font-semibold rounded-xl">Click</button></Link>
          <h1 className="font-bold text-2xl mt-5">Expert Insights: Agriculture Interviews</h1>
        </div> */}
      </div>
      <FooterLast />
    </>
  );
}
