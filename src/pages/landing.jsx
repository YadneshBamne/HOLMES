import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import RetroGrid from "@/components/ui/retro-grid";
import TextReveal from "@/components/ui/text-reveal";
import BoxReveal from "@/components/ui/box-reveal";
import Globe from "@/components/ui/globe";
import { Link } from "react-router-dom";
import { RainbowButton } from "@/components/ui/rainbow-button";

const Landing = () => {
  return (
    <main className="bg-[#FDFFFC]">
      <div className="w-full ">
        {/* Info */}
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background bg-white grid-cols-2 mx-auto">
          <span className="pointer-events-none z-10 whitespace-pre-wrap  bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent mb-20">
            <span className="text-4xl text-black">Welcome to</span>
            <br />
            <span className="text-7xl text-black">HOLMES</span>
            <br />
          </span>
          <div className="mb-20">
          {[
              {
                text: "Search PG",
                url: "/listed-PGs",
              }
              
            ].map(({ text, url }, index) => (
              <Link to={url} key={index} className="relative">
                <RainbowButton className="z-50">Select PG</RainbowButton>;
              </Link>
            ))}
          </div>

          

          <RetroGrid />
        </div>

        <div className="z-10 flex items-center justify-center bg-white dark:bg-black">
          <TextReveal text="Your One step solution for finding PG's." />
        </div>

        {/* <div className="size-full max-w-lg items-center justify-center overflow-hidden mr-auto ml-auto pt-8 bg-black text-white">
          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Education<span className="text-[#000000]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              UI library for{" "}
              <span className="text-[#000000]">Design Engineers</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <div className="mt-6">
              <p>
                -&gt; 20+ free and open-source animated components built with
                <span className="font-semibold text-[#000000]"> React</span>,
                <span className="font-semibold text-[#000000]">
                  {" "}
                  Typescript
                </span>
                ,
                <span className="font-semibold text-[#000000]">
                  {" "}
                  Tailwind CSS
                </span>
                , and
                <span className="font-semibold text-[#000000]">
                  {" "}
                  Framer Motion
                </span>
                . <br />
                -&gt; 100% open-source, and customizable. <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#000000"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-black">Explore</Button>
          </BoxReveal>
        </div> */}
      </div>
      <Footer />
    </main>
  );
};

export default Landing;
