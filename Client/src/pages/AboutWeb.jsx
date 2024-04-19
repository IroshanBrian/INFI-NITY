import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";

const AboutWeb = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <BackgroundGradientAnimation>
          <div className="absolute h-96 top-[3rem] z-49 inset-0 items-center justify-center"></div>
        </BackgroundGradientAnimation>
      </div>
      <ButtonGradient />
    </>
  );
};

export default AboutWeb;
