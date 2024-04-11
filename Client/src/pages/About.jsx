import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import BackgroundGradientAnimation from "../components/BackgroundGradientAnimationDemo";

const About = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header />
        <div>ABOUT</div>
        <BackgroundGradientAnimation />
      </div>
      <ButtonGradient />
    </>
  );
};

export default About;
