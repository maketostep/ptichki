import pinkLogo from "../assets/img/logo/pink.webp";
import DefaultButton from "./ui/DefaultButton";

export default function HeroBlock() {
  return (
    <div id="start" className="flex flex-col h-screen md:p-20 p-5 bg-green">
      <h1 className="md:hidden block text-2xl">
        Женское комьюнити в Ставрополе
      </h1>
      <div className="flex w-auto h-auto justify-between">
        <h1 className="hidden md:block text-4xl">
          Женское комьюнити
          <br /> в Ставрополе
        </h1>
        <div className="md:flex justify-end flex-1 space-y-5 md:space-y-0 md:space-x-10">
          <DefaultButton
            text="о клубе"
            handleClick={() =>
              (window.location.href = window.location.origin + "#about")
            }
          />
          <DefaultButton
            text="регистрация на события"
            handleClick={() =>
              (window.location.href = window.location.origin + "#events")
            }
          />
        </div>
      </div>
      <div className="flex h-full justify-center items-center content-center">
        <img className="w-100" src={pinkLogo} alt="pink logo" />
      </div>
    </div>
  );
}
