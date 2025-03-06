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
import IMAGES from "../images/IMAGES";

const Landing = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&display=swap"
        rel="stylesheet"
      />
      <main className="bg-white text-purple-900">
        <div className="w-full">
          {/* Hero Section */}
          <div className="relative flex mt-4 w-full flex-col items-center justify-center overflow-hidden mx-auto pb-12">
          <div className="relative flex z-30 bg-cover items-center justify-center w-full">
              {/* Background Image */}
              <img
                src={IMAGES.image7}
                alt="Holmes"
                className="relative min-h-[60vh] w-full mx-10 rounded-2xl bg-cover bg-center"
              />

              {/* Text Content (Positioned on Right) */}
              <div className="absolute right-10 top-1/2 transform -translate-y-1/2 text-right px-14 py-6 rounded-xl backdrop-blur-sm">
                <span className="pointer-events-none whitespace-pre-wrap bg-clip-text text-7xl font-bold leading-none tracking-tighter text-white drop-shadow-lg">
                  <span className="text-4xl text-white block">Welcome to</span>
                  <span className="text-7xl text-white block">HOLMES</span>
                  <span className="font-playwrite tracking-tight italic text-3xl font-semibold text-white block">
                    Your home away from home
                  </span>
                  <span className="font-playwrite tracking-tight italic text-3xl font-semibold text-white block">
                    One stop solution for finding PG's in Mumbai
                  </span>
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <SignedIn>
                <Link to="/listed-PGs" className="relative z-30 ">
                  <TrueFocus
                    sentence="Search PGs"
                    manualMode={false}
                    blurAmount={2}
                    borderColor="purple"
                    animationDuration={2}
                    pauseBetweenAnimations={1}
                  />
                </Link>
              </SignedIn>
            </div>

            {/* Animated Grid */}
            <RetroGrid />
          </div>

          {/* Marquee Section */}
          <div className="py-5">
            <MarqueeDemo />
          </div>

          {/* FAQ Section */}
          <div className="py-12 px-6">
            <h2 className="text-center text-4xl font-bold text-purple-900 mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="p-10">
              {faqs.map((faq, index) => (
                <div key={index} className="m-2 rounded-xl p-4 shadow-md">
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left text-purple-900 text-2xl font-semibold">
                      {faq.qs}
                    </AccordionTrigger>
                    <AccordionContent className="text-purple-800 text-lg">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Landing;
