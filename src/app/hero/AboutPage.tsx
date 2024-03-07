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
              We Produce Organic Food For Your Family
            </h1>
            <p className="font-medium text-lg">
            We're dedicated to revolutionizing agriculture with smart solutions.
            Our mission is to empower small-scale farmers through AI-driven technology, 
            providing personalized guidance, sustainable practices, and expert insights.
             Join us in cultivating a greener, smarter, and more abundant future for all.
            </p>
            <div className="flex gap-2 ">
              <div className="p-3 ">
                <img
                  className="flex w-32 h-232 mx-auto"
                  src="images/sprout_346195.png"
                  alt=""
                />
                <div className="bg-slate-500 text-white p-5 rounded-2xl my-5">
                  <h2 className="font-bold text-2xl">100% Organic</h2>
                  <p className="font-normal text-lg">
                  Seed to harvest, we prioritize natural, sustainable methods,enhancing crop and environmental health.Embrace pure agriculture; our products attest to organic excellence.
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
                  <h2 className="font-bold text-2xl">100% Organic</h2>
                  <p className="font-normal text-lg">
                  Purely organic, prioritizing natural, sustainable methods, from seed to harvest. Our commitment to eco-friendly farming ensures the health of crops, the environment, and your well-being
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
