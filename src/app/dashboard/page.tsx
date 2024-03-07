import { auth, currentUser } from '@clerk/nextjs';
import { DashboardNav } from './DashboardNav';
import Slider from '../hero/Slider';
import { AboutPage } from '../hero/AboutPage';
import { FeaturePage } from '../hero/FeaturePage';
import { ScrollToTop } from '../hero/ScrollToTop';
import { FooterLast } from '../hero/FooterLast';
import { NextUIProvider, nextui } from "@nextui-org/react"


// import IndexPage from '../hero/IndexPage';


export default async function DashboardPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <>

      <DashboardNav/>
      <Slider/>
      <AboutPage/>
      <FeaturePage/>
      {/* <ScrollToTop/> */}
      <FooterLast/>

      
      
    </>
  );
}