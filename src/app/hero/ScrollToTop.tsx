
import { useState } from "react";
// import { useWindowScroll } from "react-use"
export const ScrollToTop = () =>  {
    const {y: pageYOffset} = ()
    const [visiable,setVisiblity] = useState()

   
  return (
    <div className="fixed bottom-3 left-1/2 w-10 h-10 rounded-full text-white bg-green-700 cursor-pointer text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6 mx-auto mt-1 translate-y-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </div>
  );
};
