import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import * as React from "react";

import Link from "next/link";

export function DashboardNav() {
  return (
    <nav className=" z-[99999]   fixed  top-0 mt-2 left-[17%] hidden  md:flex items-center gap-5  justify-evenly">
      <Link href="/dashboard">
        <h1 className=" text-base font-semibold py-2 shadow-xl hover:text-white  px-7 rounded-md hover:bg-blue-600 transform ease-in-out duration-500">
          Home
        </h1>
      </Link>
      <Link href="/about">
        <h1 className="text-base font-semibold py-2 shadow-xl hover:text-white  px-7 rounded-md hover:bg-blue-600 transform ease-in-out duration-500">
          About
        </h1>
      </Link>
      <Link href="/team">
        <h1 className="text-base font-semibold py-2 shadow-xl hover:text-white  px-7 rounded-md hover:bg-blue-600 transform ease-in-out duration-500">
          Our Team
        </h1>
      </Link>
      <Link href="/contect">
        <h1 className="text-base font-semibold py-2 shadow-xl hover:text-white  px-7 rounded-md hover:bg-blue-600 transform ease-in-out duration-500">
          Support
        </h1>
      </Link>
      {/* <Link href="/pages">Pages</Link> */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <h1 className="text-base font-semibold py-2 px-7 shadow-xl hover:text-white  rounded-md cursor-pointer hover:bg-blue-600 transform ease-in-out duration-500">
            Our Futures
          </h1>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" cursor-pointer w-36 mt-3">
          <DropdownMenuGroup>
            <Link href="/blogs">
              <DropdownMenuItem>Mental Wellness Hub</DropdownMenuItem>
            </Link>
            <Link href="/videos">
              <DropdownMenuItem>Mental Wellness TV</DropdownMenuItem>
            </Link>
            <Link href="/shopping">
              <DropdownMenuItem>Mindful Market</DropdownMenuItem>
            </Link>

          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="https://app.droxy.ai/guest-chatbot/663ae90b90120109edf77d01">
        <h1 className="text-base font-semibold py-2 px-7 rounded-md hover:bg-blue-600 hover:text-white shadow-xl  transform ease-in-out duration-500">
          AI ChatBot
        </h1>
      </Link>
    </nav>
  );
}
