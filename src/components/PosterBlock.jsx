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
      {/* Заголовок */}
      <h2
        className="
          text-white text-center font-semibold break-words 
          text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] leading-tight
          md:mt-6 mb-8
          2xl:absolute 2xl:rotate-[355deg] 2xl:w-[500px] 2xl:leading-[66px] 2xl:top-[34px] 2xl:left-[100px]
        "
      >
        {secondText}
      </h2>

      <div
        className="
          flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 lg:gap-16 w-full
          2xl:relative 2xl:gap-24
        "
      >
        {/* Постер */}
        <div
          className="
            w-full max-w-[320px] sm:max-w-[480px] md:max-w-[600px] :max-w-[700px] aspect-[3/4] rounded-2xl bg-gray-200
            2xl:absolute 2xl:top-[233px] 2xl:left-[615px] 2xl:w-[575px] 2xl:h-[714px]
          "
        >
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

        {/* Описание + кнопка */}
        <div
          className="
            flex flex-col justify-start items-center md:items-start gap-4 md:gap-6 mt-6 md:mt-0 max-w-xl
            2xl:absolute 2xl:top-[250px] 2xl:left-[1297px]
          "
        >
          <div
            className="
              bg-white border-10 border-amber-50 rounded-l-3xl rounded-r-sm p-4 sm:p-6 shadow-md whitespace-pre-line 
              text-sm sm:text-base md:text-lg lg:text-2xl text-center md:text-left
              max-h-80 md:max-h-126 overflow-y-scroll poster-scroll
            "
            style={{ width: "min(100%, 480px)" }}
          >
            {description}
          </div>
          <TelegramButton
            text={actionButtonText}
            handleClick={() => setModalIsOpen(true)}
          />
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
