import React from "react";
import Images from "@/images/images";
import { Image } from "lucide-react";
import IMAGES from "../images/IMAGES";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import { BorderBeam } from "@/components/ui/border-beam";

export function AboutUs() {
  // const about = [
  //   {
  //     image: "/yadnesh.png"
  //   },
  //   {
  //     image: "https://avatars.githubusercontent.com/u/110719904?v=4"
  //   },
  //   {
  //     image: "https://avatars.githubusercontent.com/u/110719904?v=4"
  //   }
  // ]

  return (
    <>
    <link
        href="https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&display=swap"
        rel="stylesheet"
      />
    <div className="min-h-screen bg-white">
      <div className="p-5 flex h-[700px] w-[1300px] flex-col items-center justify-center overflow-hidden  m-auto rounded-3xl bg-background md:shadow-xl relative">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-black bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          What We Do At HOLMES
        </span>
        <div className="w-[900px] text-center mt-10">
        <span className="text-center font-custom mt-5 font-playwrite italic">
          At HOLMES, we make the search for the perfect PG accommodation
          effortless for students. Our platform is dedicated to helping students
          find the nearest and most suitable PGs in their locality, ensuring
          they have a comfortable and hassle-free living experience. Whether
          you're a student new to the city or looking to relocate closer to your
          institution, HOLMES connects you with accommodations that fit your
          needs and budget. At HOLMES, we’re committed to making your transition
          to a new living space smooth and stress-free. Let us simplify your
          search and help you focus on what matters most—your studies and
          growth!
        </span>
        </div>
        <BorderBeam size={1000} duration={12} delay={5} />
      </div>

      <div className="text-center py-5 mb-10">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-5xl sm:text-6xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Creators
        </span>
      </div>
      <div className="grid gap-10 justify-center max-w-screen-lg w-full m-auto px-4 ">
        {/* Creator 1 */}
        <div className="bg-background md:shadow-2xl flex flex-col md:flex-row items-center rounded-3xl">
          <img
            src={IMAGES.image1}
            alt="Yadnesh"
            className="w-full md:w-96 h-96 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none object-cover"
          />
          <div className="p-5 flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold font-playwrite italic">Yadnesh Dinesh Bamne</h2>
            <div className="mt-4">
              <Link to="https://www.linkedin.com/in/yadneshbamne21/" className="relative">
                <InteractiveHoverButton text="LinkedIn" />
              </Link>
              <Link to="https://github.com/YadneshBamne" className="relative ml-5">
                <InteractiveHoverButton text="GitHub" />
              </Link>
            </div>
          </div>
        </div>

        {/* Creator 2 */}
        <div className="bg-background md:shadow-2xl flex flex-col md:flex-row-reverse items-center rounded-3xl">
          <img
            src={IMAGES.image2}
            alt="Atharva"
            className="w-full md:w-96 h-96 rounded-t-3xl md:rounded-r-3xl md:rounded-tl-none object-cover"
          />
          <div className="p-5 flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold font-playwrite italic">Atharva Ganesh Gourshete</h2>
            <div className="mt-4">
              <Link to="https://www.linkedin.com/in/atharva-gourshete-b2a66927b/" className="relative">
                <InteractiveHoverButton text="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>

        {/* Creator 3 */}
        <div className="bg-background md:shadow-2xl flex flex-col md:flex-row items-center rounded-3xl">
          <img
            src={IMAGES.image3}
            alt="Om"
            className="w-full md:w-96 h-96 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none object-cover"
          />
          <div className="p-5 flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold font-playwrite italic">Om Ajay Date</h2>
            <div className="mt-4">
              <Link to="https://www.linkedin.com/in/om-date-552755282/" className="relative">
                <InteractiveHoverButton text="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>
      </div>      <Footer />
    </div>
    </>
  );
}
