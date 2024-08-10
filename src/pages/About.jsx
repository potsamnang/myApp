import React, { useState } from "react";

const About = () => {
  const [isLove, setIslove] = useState("Do you love me ?");

  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center w-screen h-1/2">
        <h1 className="text-[5rem] font-bold pb-12">{isLove}</h1>

        <div className="relative ">
          <button
            className="text-white absolute right-12 text-[2rem] font-extrabold bg-blue-400  hover:bg-blue-600   px-6 rounded-md py-3"
            onClick={() => setIslove("I love you too !")}
          >
            Yes
          </button>
          <button
            className="text-white absolute left-12 text-[2rem] font-extrabold bg-blue-400  hover:bg-blue-600   px-6 rounded-md py-3"
            onClick={() => setIslove("Fuck you !")}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
