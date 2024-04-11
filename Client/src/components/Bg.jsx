import { bg } from "../assets";
import Hero from "./Hero";

const Bg = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 z-0"
      />
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
};

export default Bg;
