import { useEffect, useRef } from "react";
import Header from "../components/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { lazy } from 'react';
import { curve } from "../assets";

const Photos = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const initializeCloudinaryGallery = async () => {
      if (window && window.cloudinary && containerRef.current) {
        window.cloudinary.galleryWidget({
          container: containerRef.current,
          cloudName: 'die906ljd',
          mediaAssets: [{
            tag: 'infi', transformation: [
              { width: 100, height: 100, crop: "fill", quality: "auto:low" }, // Adjusted transformation
            ]
          }],
          imageBreakpoint: 300, // Adjusted image breakpoint
          placeholderImage: true, // Placeholder image
        }).render();
      }
    };

    lazy(initializeCloudinaryGallery());
    // Cleanup function
    return () => {
      // Perform cleanup if needed
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="">

        <div className="absolute h-100vh top-0 left-0 z-40 right-0 bottom-0 flex flex-col mt-20 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="h1 mb-6 font-fugaz">
              INFI - NITY {` `}
              <span className="text-[3rem] lg:text-[4rem] sm:text-[3rem] inline-block relative font-bold italic font-scribble">
                23{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>
            <a href="https://drive.google.com/drive/folders/1l1pE-8ZxRP4niIXd9c4Fx-zztj9u5aD1?usp=drive_link" className="underline mb-5"><span>Click Here To Get The Full Album</span></a>
          </div>
          <div ref={containerRef} loading="eager" className="w-[80vw] lg:w-[40vw]"></div>
        </div>
      </div>
      <BackgroundGradientAnimation />
      <ButtonGradient />
    </div>
  );
};

export default Photos;
