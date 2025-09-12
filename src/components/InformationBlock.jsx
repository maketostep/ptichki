import MyBlock from "./ui/MyBlock";
import DefaultButton from "./ui/DefaultButton";
import WalpaperPattern from "./ui/WalpaperPattern";
import { informationConfig } from "./mainConfig";

export default function InformationBlock() {
  const {
    mainTextInformationBlock,
    leftTextInformationBlock,
    rightTextInformationBlock,
    leftDescriptionInformationBlock,
    buttonText,
    buttonUrl,
  } = informationConfig;
  return (
    <div
      id="about"
      className="h-screen bg-white overflow-x-hidden overflow-y-hidden relative"
    >
      <WalpaperPattern pattern="pink" />
      <div className="flex flex-col justify-center items-center relative mt-50 gap-15">
        <MyBlock text={mainTextInformationBlock} textSize="4xl" />

        <div className="flex md:flex-row space-y-10 md:space-y-0 flex-col justify-center items-center gap-5 md:gap-70">
          <MyBlock
            text={leftTextInformationBlock}
            children={leftDescriptionInformationBlock}
          />
          <MyBlock
            text={rightTextInformationBlock}
            children={
              <DefaultButton
                text={buttonText}
                handleClick={() => window.open(buttonUrl, "_blank")}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
