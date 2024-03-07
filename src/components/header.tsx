import { ThemeToggle } from "@/app/components/Themetoggle";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

export default async function Header() {
  const { userId } = auth();

  return (
    <div className="fixed w-full top-0 z-[99999] ">
      <nav className="border-b bg-background h-[10vh] flex items-center shadow-xl ">
        <div className="container  flex items-center justify-between">
          <div className="text-black my-2">
          <Link href="/dashboard">
          <img src="Header/logo.png" alt="" className="bg-green-500 hover:bg-green-400 rounded-xl py-2 h-12 p-3" />
          </Link>
          </div>
          <div className="flex items-center gap-x-5 ">
          {/* <ThemeToggle/> */}
            <div className="flex items-center gap-x-5">
              {userId ? (
                
                <div className="flex items-center gap-x-5">
                  <Link href="/dashboard">
                    <Button>Dashboard</Button>
                  </Link>
                  <UserButton afterSignOutUrl="/" />
                </div>
              ) : (
                <div className="flex items-center gap-x-5">
                  <Link href="/sign-up">
                    <Button>Sign up</Button>
                  </Link>
                  <Link href="/sign-in">
                    <Button variant="secondary">Sign in</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
