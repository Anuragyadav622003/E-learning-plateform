import React from "react";

function Banner() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-screen-2xl container mx-auto px-4 md:px-20 lg:px-24 py-16 md:h-screen">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 space-y-6 md:space-y-10 text-white md:pr-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome! Learn something{" "}
          <span className="text-pink-400">new every day!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Explore a variety of topics and expand your knowledge with engaging
          content and resources.
        </p>
        <label className="flex items-center gap-2 border-2 border-gray-500 rounded-md p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-8 h-10 text-white opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="flex-grow h-10 font-semibold text-lg text-gray-300 placeholder-slate-400 focus:outline-none focus:ring-0 bg-transparent"
            placeholder="Enter your email"
          />
        </label>
        <button className="border text-xl border-transparent bg-pink-400 hover:bg-pink-500 text-black font-bold py-3 px-5 rounded transition duration-300">
          Get Started
        </button>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-start mt-6 md:mt-0 pb-4 md:ml-12">
        <img
          src='/Banner.svg' // Ensure the path is correct
          className="h-auto max-h-full w-full md:min-h-[450px] object-contain rounded-lg shadow-lg"
          alt="Learning Banner"
        />
      </div>
    </div>
  );
}

export default Banner;
