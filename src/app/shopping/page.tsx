"use client";
import { DashboardNav } from "../dashboard/DashboardNav";
import { useState } from "react";
import Header from "./Header";
import Cart from "./Cart";


export default function page() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <DashboardNav />
      <Cart cart={cart} setCart={setCart} />
      <Header cart={cart} setCart={setCart} />
    </>
  );
}
