import { ReactNode } from "react";
import { DashboardNav } from "./DashboardNav";


export default function layout ({ children } : { children:  ReactNode }) {
  return (
    <>
    {/* <DashboardNav/> */}
    { children }
    </>
  )
}
