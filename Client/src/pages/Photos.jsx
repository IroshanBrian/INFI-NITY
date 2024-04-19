import { useEffect, useRef } from "react";
import Header from "../components/Header";
import ButtonGradient from "../assets/svg/ButtonGradient";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const Photos = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const initializeCloudinaryGallery = async () => {
      if (window && window.cloudinary && containerRef.current) {
        window.cloudinary.galleryWidget({
          container: containerRef.current,
          cloudName: 'your_cloud_name',
          mediaAssets: [{
            tag: 'test',
          }],
        }).render();
      }
    };

    initializeCloudinaryGallery();

    // Cleanup function
    return () => {
      // Perform cleanup if needed
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <div className="absolute h-96 top-[3rem] z-40 inset-0 items-center justify-center">
        <div ref={containerRef} style={{ width: '1200px', margin: '50px' }}></div>
      </div>
      <BackgroundGradientAnimation />
      <ButtonGradient />
    </div>
  );
};

export default Photos;
