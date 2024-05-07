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
                100% Personalized Support
              </h1>
              <p className="text-center text-lg font-normal">
              Experience the future of mental wellness with our fully tailored solutions and compassionate guidance
              </p>
            </div>
            <div className="mb-5">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
              100% Empathetic Assistance
              </h1>
              <p className="text-center text-lg font-normal">
              Embrace a new era of mental wellness with our heartfelt support and personalized care
              </p>
            </div>
          </div>

          <div className="bg-blue-200 rounded-xl md:w-[100%] h-2/4 shadow-lg">
            <p className="p-10 text-center text-xl font-semibold">
            Dive into personalized guidance with our AI-powered assistance, tailored to your unique needs.
Discover a wealth of mental health knowledge through our educational video hub.
Embrace sustainable practices with expert recommendations for holistic well-being.
Gain real-time insights for informed decision-making and empowered self-care.
Choose us for a mental wellness journey marked by empathy, empowerment, and success.
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
              100% Tailored Solutions
              </h1>
              <p className="text-center text-lg font-normal">
              Enter the realm of personalized mental wellness with our customized features and individualized support
              </p>
            </div>
            <div className="">
              <img
                className="w-20 h-20 mx-auto"
                src="images/sprout_346195.png"
                alt=""
              />
              <h1 className="my-2 text-center text-xl font-semibold">
              100% Compassionate Care
              </h1>
              <p className="text-center text-lg font-normal">
              Experience unparalleled empathy and understanding with our heartfelt support and personalized solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
