import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import RetroGrid from "@/components/ui/retro-grid";
import TextReveal from "@/components/ui/text-reveal";
import BoxReveal from "@/components/ui/box-reveal";
import Globe from "@/components/ui/globe";

const Landing = () => {
  return (
    <main className="bg-white">
      <Nav />
      <div className="w-full ">

        {/* Info */}
        <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background bg-white grid-cols-2 mx-auto">
          <span className="pointer-events-none z-10 whitespace-pre-wrap  bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent mb-60">
            <span className="text-4xl text-black">Welcome to</span>
            <br />
            <span className="text-7xl text-black">Holmes</span>
            <br />
            
          </span>

          {/* GLOBE */}
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
            
            <Globe/>
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
          </div>


          <RetroGrid />
        </div>


        <div className="z-10 flex items-center justify-center bg-white dark:bg-black">
          <TextReveal text="Your One step solution for finding PG's." />
        </div>

        {/* <div className="size-full max-w-lg items-center justify-center overflow-hidden mr-auto ml-auto pt-8 bg-white text-white">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <p className="text-[3.5rem] font-semibold">
              Education<span className="text-[#5046e6]">.</span>
            </p>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <h2 className="mt-[.5rem] text-[1rem]">
              UI library for{" "}
              <span className="text-[#5046e6]">Design Engineers</span>
            </h2>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="mt-6">
              <p>
                -&gt; 20+ free and open-source animated components built with
                <span className="font-semibold text-[#5046e6]"> React</span>,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Typescript
                </span>
                ,
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Tailwind CSS
                </span>
                , and
                <span className="font-semibold text-[#5046e6]">
                  {" "}
                  Framer Motion
                </span>
                . <br />
                -&gt; 100% open-source, and customizable. <br />
              </p>
            </div>
          </BoxReveal>

          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
          </BoxReveal>
        </div> */}
      </div>
      <Footer />
    </main>
  );
};

export default Landing;
