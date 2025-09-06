import pinkPattern from "../assets/img/pink_pattern.webp";
import DefaultButton from "./ui/DefaultButton";
export default function InformationBlock() {
  return (
    <div className="h-screen bg-white overflow-x-hidden relative">
      <div className="z-0 ">
        <img
          className="absolute right-[-46px] h-200 z-0"
          src={pinkPattern}
          alt="Pink Wallpaper Pattern"
        />
        <img
          className="absolute left-[-46px] h-200 z-0"
          src={pinkPattern}
          alt="Pink Wallpaper Pattern"
        />
      </div>
      <div className="relative p-15">
        <div className="w-auto bg-red rounded-2xl z-5 p-5">
          <h2 className="text-3xl text-center">ТУТ БУДЕТ ТЕКСТ О КЛУБЕ</h2>
        </div>
        <div>
          <div>
            <h2>ТЕКСТ ОБ ОФФЛАЙН</h2>
          </div>
          <div>
            <h2>ТЕКСТ О ТГ КАНАЛЕ</h2>
            <DefaultButton text="ссылка на бот тг" />
          </div>
        </div>
      </div>
    </div>
  );
}
