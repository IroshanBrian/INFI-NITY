import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import Hero from "./Hero";

export default function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute h-96 top-[3rem] z-49 inset-0 items-center justify-center">
        <Hero />
      </div>
    </BackgroundGradientAnimation>
  );
}
