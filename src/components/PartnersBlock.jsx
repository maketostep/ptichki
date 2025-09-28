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
      <h1 className="text-red mt-28 text-[56px] font-bold">
        Птички получают скидки:
      </h1>
      <div className="flex w-[1687px] flex-row justify-center items-center gap-20 mt-10">
        {posters ? (
          posters.map((p) => (
            <img
              key={p.id}
              src={"https://dabozgofuelog.beget.app" + p.image_url}
              alt={p.name}
              onClick={() => handleClick(p)}
              className="w-54 h-54 cursor-pointer object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
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
            <p className="whitespace-pre-line text-center">
              {selectedPoster?.description}
            </p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-green hover:bg text-white px-4 py-2 rounded"
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
                className="ml-4"
              >
                Сайт-партнера
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
}
