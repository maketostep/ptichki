import pinkLogo from "../assets/img/logo/pink.webp";
import DefaultButton from "./ui/DefaultButton";

export default function HeroBlock() {
  return (
    <div className="flex flex-col h-screen p-20 bg-green">
      <div className="flex w-auto h-auto justify-between">
        <h1 className=" text-3xl">
          Женское комьюнити
          <br /> в Ставрополе
        </h1>
        <div className="flex gap-10">
          <DefaultButton text="о клубе" />
          <DefaultButton text="регистрация на события" />
        </div>
      </div>
      <div className="flex h-full justify-center items-center content-center">
        <img className="w-100" src={pinkLogo} alt="pink logo" />
      </div>
    </div>
  );
}
