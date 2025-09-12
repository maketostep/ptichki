import pinkLogo from "../assets/img/logo/pink.webp";
import { heroConfig } from "./mainConfig";
import DefaultButton from "./ui/DefaultButton";

export default function HeroBlock() {
  const { headerText, aboutButtonText, formButtonText } = heroConfig;
  return (
    <div id="start" className="flex flex-col h-screen md:p-20 p-5 bg-green ">
      <div className="flex md:flex-row flex-col w-auto h-auto justify-between">
        <h1 className="md:w-125 text-4xl select-none hover:scale-z-500 transition-all">
          {headerText}
        </h1>
        <div className="md:flex justify-end flex-1 space-y-5 md:space-y-0 md:space-x-10">
          <DefaultButton
            text={aboutButtonText}
            handleClick={() =>
              (window.location.href = window.location.origin + "#about")
            }
          />
          <DefaultButton
            text={formButtonText}
            handleClick={() =>
              (window.location.href = window.location.origin + "#events")
            }
          />
        </div>
      </div>
      <div className="flex h-full justify-center items-center content-center">
        <img
          className="w-100 p-5 rounded-3xl hover:scale-102 transition-all hover:shadow-2xl"
          src={pinkLogo}
          alt="pink logo"
        />
      </div>
    </div>
  );
}
