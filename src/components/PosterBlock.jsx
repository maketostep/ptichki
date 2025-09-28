import { useEffect, useState } from "react";
import MyModal from "./ui/MyModal";
import { posterConfig } from "./mainConfig";
import { getPosters } from "../services/postersService";
import blockThree from "../assets/img/background/blockThree.png";
import { TelegramButton } from "./ui/MyButtons";
import MyForm from "./ui/MyForm";

export default function PosterBlock() {
  const [poster, setPoster] = useState(null);
  const [description, setDescription] = useState("");

  useEffect(() => {
    const posterData = getPosters();
    posterData.then((data) => {
      if (data && data.length > 0) {
        setPoster("https://dabozgofuelog.beget.app" + data[0].image_url);
        setDescription(data[0].description);
      } else {
        setPoster(null);
      }
    });
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { secondText, actionButtonText } = posterConfig;

  return (
    <div
      id="events"
      className="flex flex-col relative items-center h-[1080px] px-2 sm:px-4 md:px-10 py-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blockThree})` }}
    >
      {/* <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold mt-6 mb-4 sm:mb-8 md:mb-10 text-center">
        {headerText}
      </h1> */}
      <h2 className="text-white text-center font-semibold absolute w-[500px] leading-[66px] rotate-[355deg] break-words top-[34px] left-[100px] text-[56px]">
        {secondText}
      </h2>

      <div className="flex flex-col relative md:flex-row justify-center items-center-safe gap-6 md:gap-16 lg:gap-24 w-full">
        <div className="bg-gray-200 absolute top-[233px] left-[615px] rounded-lg w-[575px] h-[714px]">
          {poster ? (
            <img
              src={poster}
              alt="Poster"
              className="w-full h-full object-cover rounded-xl"
            />
          ) : (
            <p>Загрузка...</p>
          )}
        </div>
        <div className="flex flex-col justify-center items-center mt-4 md:mt-0 gap-4 md:gap-6 max-w-xl">
          <div className="p-5 absolute top-[300px] left-[1297px] space-y-6">
            <p className=" bg-white rounded-4xl p-5 shadow-md whitespace-pre-line text-base sm:text-lg md:text-2xl">
              {description}
            </p>
            <TelegramButton
              text={actionButtonText}
              handleClick={() => setModalIsOpen(true)}
            />
          </div>
        </div>
      </div>

      <MyModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        children={<MyForm closeModal={() => setModalIsOpen(false)} />}
      />
    </div>
  );
}
