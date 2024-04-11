import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "../components/Header";
import BackgroundGradientAnimationDemo from "../components/BackgroundGradientAnimationDemo";

const Home = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <BackgroundGradientAnimationDemo />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
