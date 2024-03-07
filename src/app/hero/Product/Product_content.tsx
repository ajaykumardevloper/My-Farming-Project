import React from "react";

export const Product_content = (props: { url: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
  return (
    <div className="w-[90%] py-5 px-5 border-2 border-blue-900 rounded-xl">
      <img
        className=" border-2 border-black rounded-lg object-cover"
        src={props.url}
        alt=""
      />
      <h1 className="mt-2 text-2xl font-bold text-gray-700">{props.name}</h1>
      <p className="mt-2 text-gray-500 font-semibold text-lg">
        {props.description}
      </p>
      <p className="mt-2 text-gray-600 font-bold text-xl">{props.price}</p>
      <a href="">
        <button className=" hover:bg-green-400 mt-4 px-6 py-2 text-lg font-semibold rounded-lg bg-green-600 text-white">
          Reed More
        </button>
      </a>
    </div>
  );
};
