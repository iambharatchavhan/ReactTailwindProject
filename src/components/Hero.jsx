import React from "react";
import Button from "./core/Button";
const Hero = () => {
  return (
    <section className="w-11/12 flex flex-col gap-6 items-center justify-center min-h-[40svh]">
      <h1 className="text-center text-4xl font-serif  text-white md:text-6xl lg:text-[7rem]">
        Fuel great thinking.
      </h1>
      <p className=" text-white text-center md:text-xl lg:w-[30%]">
        Become a Medium member to enjoy unlimited access and directly support
        the writers you read most.
      </p>
      <Button
        textColor="text-[#0e0e0e] "
        background="bg-[#fefefe]"
        content="Get unlimited access"
      />{" "}
      {/* made the button reusable */}
    </section>
  );
};

export default Hero;
