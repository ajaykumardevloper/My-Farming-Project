// import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import { Product_content } from "./Product/Product_content";
import { productData, responsive } from "./Data";
import { Product_content } from "./Product_content";
export const ProductPage = () => {
  const product = productData.map((item) => (
    
    <Product_content
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <>
      <div className="text-center">
        <h2 className="text-center text-2xl font-bold  py-3">PRODUCTS</h2>
        <h1 className="text-center text-3xl md:text-6xl font-bold  pb-7 ">
          Our Fresh & Organic Products
        </h1>
      </div>
      <Carousel
        responsive={responsive}
        className="bg-yellow-200 p-5 rounded-xl"
      >
        {product}
      </Carousel>
      ;
    </>
  );
};
