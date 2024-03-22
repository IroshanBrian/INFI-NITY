import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Bg from './components/Bg'
import { bg } from './assets'

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
        <Header />
        <Bg />
        <Hero />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
