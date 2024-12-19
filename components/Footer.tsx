import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Check more about me in my<span className="text-purple"> pronouns page</span> 
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Ughabugha
        </p>
        <a href="https://pronouns.cc/@Jaden_YaLor">
          <MagicButton
            title="Check my pronouns"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
         <a href="https://www.youtube.com/@javascriptmastery">
          <MagicButton
            title="Check out JSMastery!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

        <div className="flex items-center md:gap-3 gap-6">
          <a href="https://discord.com/channels/@me">
          <MagicButton
            title="Check out Error!"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
