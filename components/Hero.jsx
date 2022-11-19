import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: [`Hi! I'm Oluwasegun`, "Web Developer", "Digital marketer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="/img3.jpg"
        alt="myself"
        className="relative rounded-full w-32 h-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-400 mb-4 tracking-[1rem]">
          Software Developer
        </h2>
        <h1>
          <span className="text-5xl lg:6xl font-semibold">{text}</span>
          <Cursor cursorColor="red" />
        </h1>
        <div className="pt-5 space-x-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
