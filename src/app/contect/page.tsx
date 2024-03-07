import Link from "next/link";
import { DashboardNav } from "../dashboard/DashboardNav";
import { FooterLast } from "../hero/FooterLast";
import NewsLatterBox from "./NewsLatterBox";

export default function page() {

  return (
    <>
      <DashboardNav />
      <div className="bg-slate-900 mt-[58px] w-full ">
        <div className="text-white flex p-9 gap-20 items-center justify-between">
          <div className="flex flex-auto flex-col w-[600px] ">
            <p className="font-medium text-xl uppercase">Contact US</p>
            <h1 className="font-bold text-5xl py-5">
              Let's talk about your problem.
            </h1>
            <span className="font-bold text-5xl py-5"></span>
          </div>
          <div className="flex flex-auto w-96 justify-end items-start px-5">
            <Link href="/dashboard">
              <h1 className="pr-2 hover:text-green-400">Home</h1>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <h1 className="pl-2  text-green-400 hover:text-green-700">
              Contect Us
            </h1>
          </div>
        </div>
        <section id="contact" className="overflow-hidden pb-10 ">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                <div
                  className="mb-12 rounded-sm bg-slate-300 px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                  data-wow-delay=".15s
              "
                >
                  <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Need Help? Open a Ticket
                  </h2>
                  <p className="mb-12 text-base font-medium text-body-color">
                  Open a ticket for prompt assistance. Your farming success is our priority!
                  </p>
                  <form>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Message
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Enter your Message"
                            className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                          Submit Ticket
                        </button>
                  
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
              <NewsLatterBox/>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterLast />
    </>
  );
}
