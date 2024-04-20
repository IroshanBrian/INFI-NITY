import { curve, background } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[10rem] -mt-[5rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1rem] md:mb-1 lg:mb-[1rem]">
          <h1 className="h1 mb-6 font-fugaz">
            INFI - NITY {` `}
            <span className="text-[3rem] lg:text-[4rem] sm:text-[3rem] inline-block relative font-bold italic font-scribble">
              24{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Last year&apos;s Get-Together was a stellar success, uniting
            everyone beneath the starlit sky. Eager to elevate the experience
            this year, secure your tickets now and join us for another
            enchanting event. Don&apos;t miss out on the magic reserve your spot
            today!
          </p>
          <Button href="#" white>
            Coming Soon....
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className=" rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1647/1080]">
                <img
                  src={background}
                  className="w-full scale-[1.1] translate-y-[1%] md:scale-[1] md:-translate-y-[1%] lg:scale-[1] lg:-translate-y-[1%] rounded-[16px]"
                  width={1920}
                  height={1440}
                  alt="AI"
                />
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            {/* <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1920}
              alt="hero"
            /> */}
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
