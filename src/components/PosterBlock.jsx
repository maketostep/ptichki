import { useState } from "react";
import DefaultButton from "./ui/DefaultButton";
import MyModal from "./ui/MyModal";

export default function PosterBlock() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div id="events" className="flex flex-col items-center bg-yellow h-screen">
      <h1 className="text-7xl font-extrabold m-10">АФИША</h1>
      <h1 className="text-4xl font-bold mb-15 ml-5 md:ml-0">
        Следующее мероприятие
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-center md:gap-70">
        <div className="bg-red md:h-150 md:w-200 h-100 w-100">
          {/* <img src="poster.jpg" alt="Poster" className="max-w-full h-auto" /> */}
        </div>
        <div className="flex flex-col items-center mt-5 gap-5 md:gap-0">
          <p className="text-3xl">Описание события</p>
          <DefaultButton
            text="Регистрация на событие"
            handleClick={() => setModalIsOpen(true)}
          />
        </div>
      </div>
      <MyModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
    </div>
  );
}
