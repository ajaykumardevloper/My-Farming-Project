"use client";

import React, { useState } from "react";
import { data } from "./data";
import Product from "./Product";
import Link from "next/link";

export default function Header({ cart, setCart }) {
  const [products] = useState(data);

  return (
    <>
      {/* <button className="mt-20 relative left-[90%] bg-green-400 px-5 py-2 rounded-xl ">
        <Link href="/cart">View Cart</Link>
      </button> */}
      <h1 className="text-center font-bold text-3xl py-5">SHOPPING PAGE</h1>
      <h1 className="text-center font-semibold text-lg py-5 px-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quis
        voluptate. Aperiam ducimus, officia neque ratione aut dolore eligendi
      </h1>
      <div className="grid grid-cols-5 gap-5 p-5 justify-items-center">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  );
}
