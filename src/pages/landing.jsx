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
import ShinyButton from "@/components/ui/shiny-button";
import { Button } from "@/components/ui/button";
import OpenLayersMap from "@/components/maps";
import { SignedIn } from "@clerk/clerk-react";
import TrueFocus from "@/components/FocusButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqs from "../data/faq.json";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { MarqueeDemo } from "@/components/Marque_text";

const Landing = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&display=swap"
        rel="stylesheet"
      />
      <main className="bg-white">
        <div className="w-full ">
          {/* Info */}
          <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background bg-white grid-cols-2 mx-auto">
            <span className="pointer-events-none z-20  whitespace-pre-wrap  bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent mb-10">
              <span className="text-4xl text-black">Welcome to</span>
              <br />
              <span className="text-7xl text-black">HOLMES</span>
              <br />

              <span className="font-playwrite tracking-tight italic text-3xl font-semibold text-black">
                Your home away from home{" "}
              </span>
              <br />
              <span className="font-playwrite tracking-tight italic text-3xl font-semibold text-black">
                One stop solution for finding PG's in Mumbai
              </span>
            </span>

            <div className="mb-10">
              {[
                {
                  text: "Search PG",
                  url: "/listed-PGs",
                },
              ].map(({ text, url }, index) => (
                <SignedIn>
                  <Link to={url} key={index} className="relative z-30">
                    <TrueFocus
                      sentence="Select PGs"
                      manualMode={false}
                      blurAmount={5}
                      borderColor="red"
                      animationDuration={2}
                      pauseBetweenAnimations={1}
                    />
                  </Link>
                </SignedIn>
              ))}
            </div>

            {/* <Carousel className="z-50 text-5xl text-black">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                Safe PG
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                afasas
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                jfjbcjks
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                jfjbcjks
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                jfjbcjks
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                jfjbcjks
              </CarouselItem>
            </CarouselContent>
          </Carousel> */}

            <RetroGrid />
          </div>
          <div className="">
            <MarqueeDemo />
          </div>

          {/* <div className="z-10 flex items-center justify-center bg-white dark:bg-black">
          <TextReveal text="Your One step solution for finding PG's." />
        </div> */}

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
          <Accordion type="single" collapsible className="p-10">
            {faqs.map((faq, index) => {
              return (
                <div className="bg-[#61A0AF] m-2 rounded-xl p-3">
                  <AccordionItem key={index} value={`item-${index + 1}`}>
                    <>
                      <AccordionTrigger className="text-left text-white text-3xl">
                        {faq.qs}
                      </AccordionTrigger>
                      <AccordionContent className="text-white text-xl">
                        {faq.answer}
                      </AccordionContent>
                    </>
                  </AccordionItem>
                </div>
              );
            })}
          </Accordion>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Landing;
