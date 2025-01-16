import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { BorderBeam } from "./ui/border-beam";

const reviews = [
  {
    username: "Reliable",
    body: "Verified listings with accurate details and images.",
    img: "https://media.istockphoto.com/id/1390310466/vector/handshake-and-shield-line-icon.jpg?s=612x612&w=0&k=20&c=L0xJlAE9YBPvGrbonb6hl9NWE76E2MxMDMWNzTAI0bQ=",
  },
  {
    username: "Secure",
    body: "Secure premises with CCTV surveillance and security guards.",
    img: "https://media.istockphoto.com/id/1089349648/vector/affordable-housing-icon.jpg?s=612x612&w=0&k=20&c=tuMEtX8Q9RRqlN5So3CNwLbcrPaQWXGFX2aLyq4TXYA=",
  },
  {
    username: "Affordable",
    body: "Competitive pricing tailored to various budgets.",
    img: "https://media.istockphoto.com/id/2189003247/vector/interest-on-housing-icon-in-line-design-interest-housing-mortgage-loan-finance-property-real.jpg?s=612x612&w=0&k=20&c=iQi_twpOrSMCXUl8tc7RODSCjahDDwfVvT1jnAB1GEo=",
  },
  {
    username: "Cozy",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://media.istockphoto.com/id/1034202592/vector/home-sweet-home-vector-illustration-black-text-on-white-background.jpg?s=612x612&w=0&k=20&c=IE8Ms8YGHM_7U2ssSYazwtp25iangy_c-NN6UVo8PeY=",
  },
  {
    username: "@jenny",
    body: "Recommendations based on user preferences and searches.",
    img: "https://media.istockphoto.com/id/1638268797/vector/thin-line-hand-holding-lightbulb-like-expertise-linear-trend-modern-simple-lineart-knowledge.jpg?s=612x612&w=0&k=20&c=Jq_CmdnZbW_vrjlQ5e87TO8lFTstFe2EyqrXa2xENNs=",
  },
  {
    username: "@james",
    body: "Direct landlord or PG owner contact to eliminate brokerage fees.",
    img: "https://media.istockphoto.com/id/1207836996/vector/brokerage-line-icon-concept-sign-outline-vector-illustration-linear-symbol.jpg?s=612x612&w=0&k=20&c=FG3JKStzI24ac1cVoONeWAZG9f_BK9Vw08G2sWtenec=",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 ",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]" ,
  
      )}
    >
      <div className="flex flex-row items-center gap-2 rounded-2xl shadow-2xl ">
      <img className="rounded-2xl" alt="" src={img} />
        <div className="flex flex-col">
        </div>
      </div>
      <blockquote className="mt-2 text-2xl">{body}</blockquote>
      <BorderBeam size={200} duration={12} delay={5} />
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white to-neutral-800 mb-20 ">
      <Marquee pauseOnHover className="[--duration:20s] mb-20">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      
    </div>
  );
}
