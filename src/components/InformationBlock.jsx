import heart from "../assets/InformationBlock/heart.png";
import { informationConfig } from "./mainConfig";
import blockTwo from "../assets/img/background/blockTwo.png";
import noteOne from "../assets/InformationBlock/note1.png";
import noteTwo from "../assets/InformationBlock/note2.png";
import { GreenButton } from "./ui/MyButtons";
export default function InformationBlock() {
  const {
    mainTextInformationBlock,
    secondTextInformationBlock,
    thirdTextInformationBlock,
    buttonText,
    buttonUrl,
  } = informationConfig;

  return (
    <div
      id="about"
      className="h-[1684px] overflow-x-hidden overflow-y-hidden bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${blockTwo})` }}
    >
      <div className="flex flex-col items-center relative gap-10">
        <div className="flex flex-col items-center text-center w-[1470px] h-[445px] gap-[50px]">
          <div className="flex flex-row items-center mt-[52px]">
            <h2 className="text-[66px] font-extrabold text-white">
              {mainTextInformationBlock}
            </h2>
            <img src={heart} className="w-[65px] h-[53px]" alt="heart" />
          </div>

          <h2 className="text-[66px] leading-[75px] break-words font-bold text-white">
            {secondTextInformationBlock}
          </h2>
        </div>
        <img
          src={noteOne}
          alt="note 1"
          className="w-[637px] h-[735px] absolute top-[600px] left-[148px] object-cover"
        />
        <img
          src={noteTwo}
          alt="note 2"
          className="w-[637px] h-[762px] absolute top-[600px] left-[1236px] object-cover"
        />

        <h3 className="text-[56px] leading-[62px] text-center font-semibold mt-[785px] w-[500px] break-words text-white">
          {thirdTextInformationBlock}
        </h3>

        <GreenButton
          text={buttonText}
          handleClick={() => window.open(buttonUrl, "_blank")}
        />

        <div className="flex md:flex-row space-y-10 md:space-y-0 flex-col justify-center items-center gap-5 md:gap-70"></div>
      </div>
    </div>
  );
}
