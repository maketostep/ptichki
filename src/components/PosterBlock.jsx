import { useState } from "react";
import DefaultButton from "./ui/DefaultButton";
import MyModal from "./ui/MyModal";
import { posterConfig } from "./mainConfig";

export default function PosterBlock() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { headerText, secondText, descriptionText, actionButtonText } = posterConfig;
  return (
    <div
      id="events"
      className="flex flex-col items-center bg-yellow min-h-screen px-2 sm:px-4 md:px-10 py-6"
    >
      <h1
        className="text-3xl sm:text-5xl md:text-7xl font-extrabold mt-6 mb-4 sm:mb-8 md:mb-10 text-center"
      >
        {headerText}
      </h1>
      <h2
        className="text-xl sm:text-2xl md:text-4xl font-bold mb-6 sm:mb-10 md:mb-15 ml-2 sm:ml-0 text-center"
      >
        {secondText}
      </h2>
      <div
        className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 lg:gap-24 w-full"
      >
        <div
          className="bg-red rounded-lg m-2 sm:m-5 h-64 w-64 sm:h-80 sm:w-80 md:h-[28rem] md:w-[32rem] lg:h-[32rem] lg:w-[40rem] flex items-center justify-center"
        >
          {/* <img src="poster.jpg" alt="Poster" className="max-w-full h-auto" /> */}
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0 gap-4 md:gap-6 max-w-xl">
          <p className="text-base sm:text-lg md:text-2xl text-center">{descriptionText}</p>
          <DefaultButton
            text={actionButtonText}
            handleClick={() => setModalIsOpen(true)}
          />
        </div>
      </div>
      <MyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
}
