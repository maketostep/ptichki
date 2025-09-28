import pinkLogo from "../assets/img/logo/pink.webp";
import { heroConfig } from "./mainConfig";
import blockOne from "../assets/img/background/blockOne.png";
import { DefaultButton, SecondButton } from "./ui/MyButtons";

export default function HeroBlock() {
  const { headerText, aboutButtonText, formButtonText } = heroConfig;
  return (
    <div
      id="start"
      className="flex flex-col h-[1080px] md:p-10 p-3 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blockOne})` }}
    >
      <div className="flex md:flex-row flex-col w-auto h-auto justify-between">
        <h4 className="md:w-[379px] w-full text-header font-bold text-[36px] leading-[44px] break-words select-none">
          {headerText}
        </h4>
        <div className="md:flex h-auto justify-end md:space-x-10">
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
      <div className="flex h-full justify-center items-center content-center">
        <img
          className="w-[910px] absolute top-[310px] rounded-3xl"
          src={pinkLogo}
          alt="pink logo"
        />
      </div>
    </div>
  );
}
