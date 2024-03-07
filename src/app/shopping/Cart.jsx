/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { DashboardNav } from "../dashboard/DashboardNav";
import Link from "next/link";

export default function Cart({ cart, setCart }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);
  return (
    <>
      <DashboardNav />
      {/* <button className="mt-20 relative left-[90%] bg-green-400 px-5 py-2 rounded-xl ">
        <Link href="/shopping">Back</Link>
      </button> */}

        <h1 className=" mt-20 font-bold text-2xl text-center ">Cart Product</h1>
        <div className="flex flex-col p-5 border border-slate-400">
          {cart.map((product) => (
            <div className="flex gap-5 items-center mb-5" key={product.id}>
              <div className="w-[100px] h-[100px]">
                <img src={product.src} alt="iamge" className="h-full w-full" />
              </div>
              <div>
                <h3 className="mb-1">{product.name}</h3>
                <p>Price Rs : {product.amt}</p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-bold text-lg">Total Amount Rs:{total}</h3>

    </>
  );
}
