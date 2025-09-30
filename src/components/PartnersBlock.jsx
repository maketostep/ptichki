import { useEffect, useState } from "react";
import blockFour from "../assets/img/background/blockFour.png";
import { getPartners } from "../services/partnersService";
import MyModal from "./ui/MyModal";
export default function PartnersBlock() {
  const [posters, setPosters] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);

  const handleClick = (poster) => {
    setSelectedPoster(poster);
    setModalIsOpen(true);
  };

  useEffect(() => {
    const posterData = getPartners();
    posterData.then((data) => {
      if (data && data.length > 0) {
        setPosters(data);
      } else {
        setPosters(null);
      }
    });
  }, []);

  return (
    <div
      id="partners"
      className="flex flex-col relative items-center h-[521px] px-2 sm:px-4 md:px-10 py-6 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blockFour})` }}
    >
      <h1 className="text-red 2xl:mt-28 mt-20 md:text-[36px] 2xl:text-[56px] text-[28px] font-bold">
        Птички получают скидки:
      </h1>
      <div className="flex justify-center md:flex-grow flex-wrap items-center 2xl:gap-20 xl:gap-10 gap-5 mt-10 md:mt-0">
        {posters ? (
          posters.map((p) => (
            <img
              key={p.id}
              src={"https://dabozgofuelog.beget.app" + p.image_url}
              alt={p.name}
              onClick={() => handleClick(p)}
              className="2xl:w-54 2xl:h-54 md:w-40 md:h-40 w-26 h-auto cursor-pointer object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
            />
          ))
        ) : (
          <div>Загрузка...</div>
        )}
      </div>

      <MyModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        children={
          <div className="flex flex-col justify-center items-center">
            <p className="2xl:text-4xl whitespace-pre-line text-center">
              {selectedPoster?.description}
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-green 2xl:text-3xl hover:bg-red text-white cursor-pointer transition-all duration-300 px-6 py-2 rounded-2xl"
                onClick={() => {
                  setModalIsOpen(false);
                  window.location.href = window.location.origin + "#events";
                }}
              >
                Стать участником птичек
              </button>
              <button
                onClick={() =>
                  window.open(selectedPoster?.partner_url, "_blank")
                }
                className="bg-red 2xl:text-3xl ml-4 hover:bg-green text-white cursor-pointer transition-all duration-300 px-6 py-2 rounded-2xl"
              >
                Сайт-партнера
              </button>
            </div>
            <p className="mt-5 text-center text-sm underline text-gray-500">
              Не является публичной офертой
            </p>
          </div>
        }
      />
    </div>
  );
}
