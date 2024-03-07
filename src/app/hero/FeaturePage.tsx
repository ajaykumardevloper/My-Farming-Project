import React from "react";

export const FeaturePage = () => {
  return (
    <>
      <div className="bg-green-300  mt-10 mx-5 shadow-xl rounded-2xl p-5">
        <h3 className="text-center text-6xl font-bold py-3 text-white">
          Our Features
        </h3>
        <h1 className="text-center text-2xl font-bold text-white">
          Why Choose Us!!!
        </h1>
        <div className="md:flex justify-between mt-5">
          <div className="text-white p-5">
            <div className="mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
                100% Organic
              </h1>
              <p className="text-center text-lg font-normal">
              Embrace the pure essence of agriculture with our 100% organic commitment
              </p>
            </div>
            <div className="mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
              Sustainable Farming Practices
              </h1>
              <p className="text-center text-lg font-normal">
              Discover eco-friendly methods from seed to harvest. Prioritize sustainability with our expert guidance.
              </p>
            </div>
          </div>

          <div className="bg-blue-200 rounded-xl md:w-[100%] h-2/4 shadow-lg">
            <p className="p-10 text-center text-xl font-semibold">
            Our features are designed to elevate your farming experience.
            Our AI-powered assistance provides personalized guidance, ensuring efficient crop management.
            Explore our educational video hub for a wealth of agricultural knowledge.
            Embrace sustainable solutions, receiving expert recommendations for eco-friendly practices. 
            Benefit from real-time insights, empowering informed decision-making.
             Choose us for a farming journey marked by intelligence, sustainability, and success.
            </p>
            <img
              className="mx-auto pb-5 md:w-96"
              src="images/feature.png"
              alt=""
            />
          </div>
          <div className="text-white p-5">
            <div className="mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
              AI-Powered Precision
              </h1>
              <p className="text-center text-lg font-normal">
              Experience farming with precision using our AI-powered assistance. Tailored guidance for optimal results.
              </p>
            </div>
            <div className="">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
              Real-Time Insights for Smart Farming
              </h1>
              <p className="text-center text-lg font-normal">
              Stay ahead in your farming journey with real-time insights. Informed decision-making for a more productive farm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
