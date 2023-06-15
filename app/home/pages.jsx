"use client";
import Lottie from "lottie-react";
import Construction from "../../public/under-construction.json";

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex justify-center items-center">
          <p className="text-[60px] px-2">👨‍💻</p>
          <p className="my-10 flex justify-center items-center animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent lg:text-7xl md:text-7xl text-2xl font-black">
            SMART CODES
          </p>
        </div>

        <div>
          <div className="flex justify-center items-center w-[90vw] sm:w-[500px]  text-center ">
            <p className="font-bold md:p-1 lg:p-1 text-xl">
              Your Dreams Fulfilled
            </p>
            <p className="font-bold md:p-1 lg:p-1 text-xl"> 🌈💫 </p>
            <p className="font-bold md:p-1 lg:p-1 text-xl"> Enhanced by Tech</p>
          </div>
        </div>

        <div>
          <Lottie
            animationData={Construction}
            className="h-[400px] opacity-60"
          />
        </div>

        <div className="flex">
          <p className="flex justify-center items-center text-4xl my-20 font-bold text-zinc-500">
            {"Coming Soon </>..."}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
