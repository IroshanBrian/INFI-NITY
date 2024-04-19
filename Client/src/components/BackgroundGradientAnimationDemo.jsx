import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import Hero from "./Hero";

export default function BackgroundGradientAnimationDemo() {
  return (
    <>
      <div className="z-49 inset-0 items-center justify-center">
        <div className="pt-10">
          <Hero />
        </div>
        <BackgroundGradientAnimation />
      </div>
    </>
  );
}
