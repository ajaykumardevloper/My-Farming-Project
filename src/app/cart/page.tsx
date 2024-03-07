"use client";
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Link from "next/link";

export default function Cart() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <DashboardNav />
      <button className="mt-20 relative left-[90%] bg-green-400 px-5 py-2 rounded-xl ">
        <Link href="/shopping">Back</Link>
      </button>
      <h1 className=" font-bold text-2xl text-center ">Cart Product</h1>
      <div className="flex flex-col p-5 border border-slate-400">
        {/* {
          Cart.map((product)=>(
            <div className="flex gap-5 items-center mb-5">
          <div className="w-[100px] h-[100px]">
            <img
              src="https://placehold.co/100*100"
              alt="iamge"
              className="h-full w-full"
            />
          </div>
          <div>
            <h3 className="mb-1">Product Name</h3>
            <p>Price Rs : 299</p>
          </div>
        </div>
          ))
        } */}
      </div>
      <h3 className="font-bold text-lg">Total Amount Rs:{total}</h3>
    </>
  );
}
