// import Image from "next/image";

import { AboutPage } from "./hero/AboutPage";
import { FeaturePage } from "./hero/FeaturePage";
import { FooterLast } from "./hero/FooterLast";
import Slider from "./hero/Slider";


// import  IndexPage  from "./hero/IndexPage";

export default function Home() {
  return (
   <>
    {/* <IndexPage/> */}
    <Slider/>
    <AboutPage/>
    <FeaturePage/>
    <FooterLast/>
   </>
  );
}
