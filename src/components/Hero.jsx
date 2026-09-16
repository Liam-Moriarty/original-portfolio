import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";

const Hero = () => {
  return (
    <div className="md:h-[70vh] w-full md:pb-16 md:pt-32">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw] " fill="blue" />
      </div>

      <div className="h-screen w-full bg-purple-bg dark:bg-grid-white/[0.03] bg-grid-black/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-purple-bg [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-40 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="font-mono uppercase tracking-widest text-[11px] text-center text-blue-100 max-w-80">
            AI-Powered Products with React & Google Cloud
          </h2>

          <TextGenerateEffect
            className="text-center text-[2rem] md:text-[2.5rem]"
            words="Transforming Concepts into Interactive Digital Solutions"
          />

          <p className="text-center text-text-white md:tracking-wider mb-4 text-sm">
            Hi, I&apos;m Fernando Ordiales, Junior AI Software Engineer at
            Hytel.
          </p>

          <a href="#recentProjects">
            <MagicButton
              title="Show my Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
