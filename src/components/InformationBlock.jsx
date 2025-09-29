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
        <div className="flex flex-col items-center m-5 text-center 2xl:w-[1470px] 2xl:h-[445px] 2xl:gap-[50px]">
          <div className="flex md:flex-row flex-col items-center mt-[52px]">
            <h2 className="2xl:text-[66px] md:text-5xl text-3xl font-extrabold text-white">
              {mainTextInformationBlock}
            </h2>
            <img
              src={heart}
              className="2xl:w-[65px] 2xl:h-[53px] h-auto w-10 ml-4 object-cover"
              alt="heart"
            />
          </div>

          <h2 className="2xl:text-[66px] md:text-5xl mt-5 text-2xl 2xl:leading-[75px] break-words font-bold text-white">
            {secondTextInformationBlock}
          </h2>
        </div>
        <div className="md:flex 2xl:block flex-row gap-120">
          <img
            src={noteOne}
            alt="note 1"
            className="w-90 md:w-120 md:h-auto 2xl:w-[637px] 2xl:h-[735px] 2xl:absolute 2xl:mt-0 xl:mt-[244px] top-[600px] left-[148px] object-cover"
          />
          <img
            src={noteTwo}
            alt="note 2"
            className="w-90 md:w-100 md:h-auto 2xl:w-[637px] 2xl:h-[762px] 2xl:absolute 2xl:mt-0 xl:mt-[244px] top-[600px] left-[1236px] object-cover"
          />
        </div>
        <div className="flex flex-col items-center 2xl:mt-[725px] xl:mt-[120px] space-y-10">
          <h3 className="md:text-[56px] text-4xl leading-[62px] text-center font-semibold w-[500px] break-words text-white">
            {thirdTextInformationBlock}
          </h3>

          <GreenButton
            text={buttonText}
            handleClick={() => window.open(buttonUrl, "_blank")}
          />
        </div>

        <div className="flex md:flex-row space-y-10 md:space-y-0 flex-col justify-center items-center gap-5 md:gap-70"></div>
      </div>
    </div>
  );
}
