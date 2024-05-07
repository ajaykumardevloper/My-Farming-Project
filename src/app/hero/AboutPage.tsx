import React from 'react'

export const AboutPage = () => {
  return (
    <>
        <section id="" className="mt-10 mx-5 shadow-xl rounded-2xl p-5 text-black bg-slate-300">
        <h1 className="text-center text-3xl font-bold py-5">About Us</h1>
        <div className="lg:flex gap-5 items-start">
          <img
            className="sm:w-screen lg:w-auto sm:mb-5 border-8 p-5 border-green-500"
            src="images/about.png"
            alt=""
          />
          <div className="">
            <h1 className="font-bold text-5xl py-5">
            Empowering Mental Wellness Through Technology
            </h1>
            <p className="font-medium text-lg">
            At CalmCare Solutions, we're committed to transforming mental health care with innovative technology. Our mission is to provide personalized support, actionable insights, and compassionate guidance to individuals on their wellness journey. Join us in fostering a healthier, happier, and more connected world for all.
            </p>
            <div className="flex gap-2 ">
              <div className="p-3 ">
                <img
                  className="flex w-32 h-232 mx-auto"
                  src="images/sprout_346195.png"
                  alt=""
                />
                <div className="bg-slate-500 text-white p-5 rounded-2xl my-5">
                  <h2 className="font-bold text-2xl">AI-Powered Wellness</h2>
                  <p className="font-normal text-lg">
                  Harnessing the latest advancements in AI, our technology delivers personalized, effective mental health support. Embrace the future of wellness; our solutions redefine mental health care excellence.
                  </p>
                </div>
              </div>
              <div className="p-3  rounded-2xl">
                <img
                  className="flex w-32 h-32 mx-auto"
                  src="images/sprout_346195.png"
                  alt=""
                />
                <div className="bg-slate-500 text-white p-5s rounded-2xl my-5">
                  <h2 className="font-bold text-2xl">Empowering Minds</h2>
                  <p className="font-normal text-lg">
                  With cutting-edge technology, we empower individuals to achieve mental wellness and personal growth. Embrace the future of mental health; our solutions redefine support and empowerment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </>
  )
}
