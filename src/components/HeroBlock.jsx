import pinkLogo from "../assets/img/logo/pink.webp";
import { heroConfig } from "./mainConfig";
import { DefaultButton, SecondButton } from "./ui/MyButtons";
import element1 from "../assets/heroBlock/element1.png";
import element2 from "../assets/heroBlock/element2.png";
import photo1 from "../assets/heroBlock/photo1.png";
import photo2 from "../assets/heroBlock/photo2.png";
import { scrollToSection } from "../utils/navigation";
export default function HeroBlock() {
  const { headerText, aboutButtonText, formButtonText } = heroConfig;
  return (
    <div
      id="start"
      className="hero-block-bg flex flex-col h-[1080px] md:p-10 p-3 relative"
    >
      <div className="flex flex-col md:flex-row w-auto h-auto justify-between items-center md:items-start gap-6 md:gap-0">
        <h4
          className="md:w-[379px] w-full text-header font-bold 
          text-[24px] sm:text-[28px] lg:text-[36px] 
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
            handleClick={() => scrollToSection("about")}
          />
          <SecondButton
            size="xl"
            text={formButtonText}
            handleClick={() => scrollToSection("events")}
          />
        </div>
      </div>
      <div className="flex h-full justify-start sm:justify-center items-start sm:items-center mt-30 md:mt-0">
        <img
          src={photo1}
          className="2xl:hidden w-45 md:w-75 h-auto absolute top-[300px] left-[15px] md:top-[200px] md:left-[100px] object-cover"
          alt="photo 1"
        />
        <img
          src={photo2}
          className="2xl:hidden w-45 md:w-75 h-auto absolute top-[700px] right-[15px] md:top-[500px] md:right-[100px] object-cover"
          alt="photo 2"
        />
        <img
          src={element1}
          className="2xl:hidden w-45 md:w-75 h-auto absolute top-[600px] left-[30px] object-cover"
          alt="element 1"
        />
        <img
          src={element2}
          className="2xl:hidden w-35 md:w-55 h-auto absolute top-[300px] right-[30px] object-cover"
          alt="element 2"
        />
        <img
          className="w-[345px] sm:w-[400px] xl:w-[680px] 2xl:w-[910px] md:absolute md:block flex mt-25 md:mt-0 top-[500px] md:top-[350px] lg:top-[310px]"
          src={pinkLogo}
          alt="pink logo"
        />
      </div>
    </div>
  );
}
