import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { aboutimg } from '../assets/index'

const About = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className="absolute top-[3rem] z-40 inset-0 ">
          <div className="flex justify-center items-center h-screen">
            <div className="lg:w-[70vw] md:w-[90vw] mx-auto bg-[#0003] shadow-lg rounded-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 flex justify-center">
                  <img
                    className="object-cover lg:w-[40vw] md:w-[60vw] sm:md:w-[16rem]"
                    src={aboutimg}
                    alt="about"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-lg text-blue font-semibold underline underline-offset-4">
                    About The Event
                  </div>
                  <p className="mt-2 text-white-100">INFI-NITY is more than just a gathering; it's a celebration of connection and community, initiated in 2023 by the visionary students of Sanghabodhi National College. Rooted in the spirit of inclusivity and camaraderie, INFI-NITY brings together individuals from diverse backgrounds, united by a shared passion for learning, growth, and collaboration.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BackgroundGradientAnimation />
      </div>
      <ButtonGradient />
    </>
  );
};

export default About;
