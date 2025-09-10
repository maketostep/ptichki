import MyBlock from "./ui/MyBlock";
import DefaultButton from "./ui/DefaultButton";
import WalpaperPattern from "./ui/WalpaperPattern";

export default function InformationBlock() {
  return (
    <div
      id="about"
      className="h-screen bg-white overflow-x-hidden overflow-y-hidden relative"
    >
      <WalpaperPattern pattern="pink" />
      <div className="flex flex-col justify-center items-center relative mt-50 gap-15">
        <MyBlock text="ТУТ БУДЕТ ТЕКСТ О КЛУБЕ" textSize="4xl" />

        <div className="flex md:flex-row space-y-10 md:space-y-0 flex-col justify-center items-center gap-5 md:gap-70">
          <MyBlock text="ТЕКСТ ОБ ОФЛАЙНЕ" />
          <MyBlock
            text="ТЕКСТ О ТГ КАНАЛЕ"
            children={
              <DefaultButton
                text="ссылка на бот тг"
                handleClick={() =>
                  window.open("https://t.me/@ptichkirobot", "_blank")
                }
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
