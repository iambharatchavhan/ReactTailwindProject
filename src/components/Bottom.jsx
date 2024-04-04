import React from "react";
import Button from "./core/Button";

const Bottom = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5 relative">
      <h1 className="font-serif text-3xl  lg:text-9xl lg:w-[55%] leading-10 text-center p-10">
        Take your mind in new directions.
      </h1>

      <Button
        textColor="text-[#f6f6f6] "
        background="bg-black"
        content="Get unlimited access"
      />

<div className="hidden lg:flex justify-between w-full text-xl leading-[.9]">
<div>
        <pre className="absolute  bottom-0 left-0 lg:left-[-2.7rem] ">
          DISCOVER <br />
          DDISCOVERDISCOVER <br />
          DISCOVERDISCOVERDISCOVERDISCOVER <br />
          DDISCOVERDISCOVERDISCOVERDISCOVERDISCOVER <br />
          DISCOVERDISCOVERDISCOVERDISCOVERDISCOVERDISCOVER <br />
          DDISCOVERDISCOVERDISCOVERDISCOVERDISCOVERDISCOVERDISCOVER <br />
          DISCOVERDISCOVERDISCOVERDISCOVERDISCOVERDISCOVERDISCOVERDISCOVER <br />
        </pre>
      </div>
      <div className="text-right absolute  bottom-0 right-0 lg:right-[-2.7rem] ">
      <pre>
         EXPLORER<br/>
         EEXPLOREREXPLORER<br/>
         EXPLOREREXPLOREREXPLORERER<br/>
         EEXPLOREREXPLOREREXPLOREREXPLORER<br/>
         EXPLOREREXPLOREREXPLOREREXPLOREREXPLORER<br/>
         EEXPLOREREXPLOREREXPLOREREXPLOREREXPLOREREXPLORER<br/>
         EXPLOREREXPLOREREXPLOREREXPLOREREXPLOREREXPLOREREXPLORER<br/>
      </pre>
      </div>
</div>
     
     
    </section>
  );
};

export default Bottom;
