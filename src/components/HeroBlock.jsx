import pinkLogo from "../assets/img/logo/pink.webp";
import { heroConfig } from "./mainConfig";
import blockOne from "../assets/img/background/blockOne.png";
import { DefaultButton, SecondButton } from "./ui/MyButtons";

export default function HeroBlock() {
  const { headerText, aboutButtonText, formButtonText } = heroConfig;
  return (
    <div
      id="start"
      className="flex flex-col h-[1080px] w-screen md:p-10 p-3 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${blockOne})` }}
    >
      <div className="flex flex-col md:flex-row w-auto h-auto justify-between items-center md:items-start gap-6 md:gap-0">
        <h4
          className="md:w-[379px] w-full text-header font-bold 
          text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] 
          leading-[32px] sm:leading-[36px] md:leading-[40px] lg:leading-[44px] 
          text-center md:text-left break-words select-none"
        >
          {headerText}
        </h4>
        <div className="flex flex-col sm:flex-row h-auto justify-center md:justify-end sm:space-x-4 md:space-x-10 gap-4 sm:gap-0">
          <DefaultButton
            size="xl"
            color="red"
            text={aboutButtonText}
            handleClick={() =>
              (window.location.href = window.location.origin + "#about")
            }
          />
          <SecondButton
            size="xl"
            text={formButtonText}
            handleClick={() =>
              (window.location.href = window.location.origin + "#events")
            }
          />
        </div>
      </div>
      <div className="flex h-full justify-start md:justify-center items-start md:items-center mt-30 md:mt-0">
        <img
          className="w-[360px] sm:w-[420px] md:w-[680px] lg:w-[910px] absolute sm:top-[250px] md:top-[280px] lg:top-[310px]"
          src={pinkLogo}
          alt="pink logo"
        />
      </div>
    </div>
  );
}
