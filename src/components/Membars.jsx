import React from "react";

const Members = () => {
  return (
    <section className="w-11/12 bg-[#fefefe] flex flex-col gap-12 justify-center items-center min-h-[40svh] ">
      <h3 className="font-bold text-2xl mt-5 font-serif md:text-5xl lg:font-normal">
        Why I'm a Medium Member...
      </h3>
      <div className="flex justify-center items-center gap-10 flex-wrap lg:flex-nowrap ">
        <div className="flex gap-3 justify-center items-center">
          <div className="rounded-full overflow-hidden w-[200px]">
            <img src="https://i.pravatar.cc/200" alt="" />
          </div>
          <div className="rounded-[50%] overflow-hidden w-[90px] h-[200px] bg-pink-600"></div>
          <div className="rounded-[50%] overflow-hidden w-[50px] h-[180px] bg-green-500"></div>
        </div>

        <div className="lg:w-1/4">
          <p className=" text-xl  font-semibold text-gray-800">
            "I love Medium's membership - it gives me access to the stories |
            love by the writers I love, and it allows me to help support those
            writers financially."
          </p>
          <p className="text-2xl font-serif py-2">Kayt Molina</p>
          <button className="py-2 px-8 font-bold">{"--->"}</button>
        </div>
      </div>
    </section>
  );
};

export default Members;
