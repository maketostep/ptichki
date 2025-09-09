import DefaultButton from "./ui/DefaultButton";

export default function PosterBlock() {
  return (
    <div className="flex flex-col items-center bg-yellow h-screen">
      <h1 className="text-7xl font-extrabold m-10">АФИША</h1>
      <h1 className="text-4xl font-bold mb-15">Следующее мероприятие</h1>
      <div className="flex justify-center items-center gap-70">
        <div className="bg-red h-150 w-200">
          {/* <img src="poster.jpg" alt="Poster" className="max-w-full h-auto" /> */}
        </div>
        <div className="flex flex-col items-center">
          <p className="text-3xl">Описание события</p>
          <DefaultButton text="Регистрация на событие" />
        </div>
      </div>
    </div>
  );
}
