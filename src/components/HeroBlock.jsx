import pinkLogo from "../assets/img/logo/pink.webp";
import { heroConfig } from "./mainConfig";
import blockOne from "../assets/img/background/blockOne.png";
import blockOneMobile from "../assets/img/background/blockOneMobile.png";
import { DefaultButton, SecondButton } from "./ui/MyButtons";
import element1 from "../assets/heroBlock/element1.png";
import element2 from "../assets/heroBlock/element2.png";
import photo1 from "../assets/heroBlock/photo1.png";
import photo2 from "../assets/heroBlock/photo2.png";
import { isMobile } from "react-device-detect";
export default function HeroBlock() {
  const { headerText, aboutButtonText, formButtonText } = heroConfig;
  return (
    <div
      id="start"
      className="flex flex-col h-[1080px] md:p-10 p-3 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${isMobile ? blockOneMobile : blockOne})`,
      }}
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
        <div className="flex flex-col sm:flex-row h-auto items-center justify-center md:justify-end sm:space-x-4 md:space-x-10 gap-4 sm:gap-0">
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
          src={photo1}
          className="md:hidden w-45 h-auto absolute md:top-[400px] md:left-[200px] top-[300px] object-cover"
          alt="photo 1"
        />
        <img
          src={photo2}
          className="md:hidden w-45 h-auto absolute top-[700px] right-[15px] object-cover"
          alt="photo 2"
        />
        <img
          src={element1}
          className="md:hidden w-45 h-auto absolute top-[600px] left-[30px] object-cover"
          alt="element 1"
        />
        <img
          src={element2}
          className="md:hidden w-35 h-auto absolute top-[300px] right-[30px] object-cover"
          alt="element 2"
        />
        <img
          className="w-[360px] sm:w-[420px] md:w-[680px] lg:w-[910px] absolute top-[500px] md:top-[280px] lg:top-[310px]"
          src={pinkLogo}
          alt="pink logo"
        />
      </div>
    </div>
  );
}
