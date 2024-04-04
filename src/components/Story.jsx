import React from "react";
import MyComponent from "./Pattern";
import HalfCircle from "./Halfcircle";
const Story = () => {
  return (
    <section className=" w-11/12  grid  gap-2 text-white  relative  lg:grid-cols-2 lg:min-h-[40svh]">
      <div className="flex flex-col justify-center items-start md:p-6">
        <h2 className=" p-2 text-3xl font-serif md:text-5xl lg:w-[80%]">
          Get unlimited access to every story.
        </h2>
        <div className="flex justify-start items-center py-2 md:py-5 ">
          <MyComponent />
        </div>
        <p className=" lg:mt-12 p-2 lg:w-[72%]">
          Read any article in our entire library across all your devices - with
          no paywalls, story limits or ads.
        </p>
      </div>
      <div className="hidden border-r-[1px] border-white self-center absolute right-[55%] lg:min-h-[390px] lg:block "></div>
      <div className="flex flex-col justify-center items-start md:p-6 lg:pl-[5rem]">
        <h2 className="font-serif text-3xl mt-5 md:mt-0  md:text-5xl lg:w-[75%]">
          Support the voices you want to hear more from.
        </h2>
        <div className="w-[300px] h-[300px]">
          <HalfCircle />
        </div>
        <p className=" mb-10 lg:w-[62%]">
          A portion of your membership will directly support the writers and
          thinkers you read the most. 
        </p>
        
                                 
        

      </div>
    </section>
  );
};

export default Story;
