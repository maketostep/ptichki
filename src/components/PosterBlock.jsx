import { useEffect, useState } from "react";
import { posterConfig } from "./mainConfig";
import { getPosters } from "../services/postersService";
import { TelegramButton } from "./ui/MyButtons";
import MyForm from "./ui/MyForm";
import cloud from "../assets/posterBlock/cloud.png";
import aroundPoster from "../assets/img/aroundPoster.png";
import { useModal } from "../context/ModalContext";

export default function PosterBlock() {
  const [poster, setPoster] = useState(null);
  const [description, setDescription] = useState("");
  const { openModal } = useModal();

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

  const { secondText, actionButtonText } = posterConfig;

  const handleOpenRegistration = () => {
    openModal(MyForm, { title: "Регистрация" });
  };

  return (
    <section
      id="events"
      className="poster-block-bg h-[1080px] relative flex xl:flex-row flex-col justify-center 2xl:px-4 sm:px-6 md:px-10 2xl:py-12"
    >
      <h2 className="text-white mb-25 md:mb-25 xl:mb-0 xl:mt-18 2xl:mt-2 2xl:ml-[200px] xl:rotate-[-6deg] text-center font-semibold break-words text-[28px] sm:text-[36px] md:text-[44px] 2xl:text-[56px] leading-tight">
        {secondText}
      </h2>
      <div className="w-full max-w-full flex flex-col items-center xl:mt-48">
        <img
          src={cloud}
          alt="cloud"
          className="2xl:hidden hidden md:block absolute top-15 xl:top-5 right-2 self-end w-32 md:w-52 2xl:w-60 z-0"
        />
        <img
          src={aroundPoster}
          alt="around poster"
          className={`absolute flex opacity-90 z-0 
            2xl:w-[760px] 2xl:h-[900px] 2xl:top-[155px] 2xl:left-[535px] 
            xl:w-[660px] xl:h-[800px] xl:top-[200px] xl:left-[325px]
            lg:w-[500px] lg:h-[570px] lg:top-[75px] lg:left-[310px]
            md:w-[450px] md:h-[550px] md:top-[90px] md:left-[225px]
            w-[450px] h-[520px] top-[100px] left-[0px]`}
        />
        <div className="2xl:mt-20 xl:mt-36 w-full flex flex-col xl:flex-row justify-start">
          <div className="flex flex-col xl:flex-row xl:items-start items-center gap-10 relative">
            <div className="flex justify-start">
              <div className="z-5 w-[300px] sm:w-[340px] md:w-[320px] xl:w-[420px] 2xl:w-[480px] aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
                {poster ? (
                  <img
                    src={poster}
                    alt="Poster"
                    className="w-full h-full object-cover z-5"
                  />
                ) : (
                  <p className="text-center text-white">Загрузка...</p>
                )}
              </div>
            </div>

            <div className="h-full w-[300px] sm:w-[320px] md:w-[320px] 2xl:w-[420px] flex flex-col justify-end-safe gap-6">
              <div className="bg-white border-4 border-b-0 border-t-yellow border-r-green border-l-red rounded-3xl rounded-r-xl p-4 sm:p-6 shadow-md whitespace-pre-line text-sm sm:text-base md:text-md 2xl:text-2xl text-center md:text-left max-h-80 xl:max-h-108 overflow-y-auto poster-scroll w-full hover:bg-gray-100 hover:scale-102 transition-all duration-300">
                {description}
              </div>
              <div className="flex xl:justify-start justify-center">
                <TelegramButton
                  text={actionButtonText}
                  handleClick={handleOpenRegistration}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
