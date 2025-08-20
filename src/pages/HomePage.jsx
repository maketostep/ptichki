import Block from "../components/ui/block";
export default function HomePage() {
  return (
    <div className="flex flex-col gap-5 m-5">
      <div className="flex h-50 justify-start items-start gap-5">
        <Block headerText="Наш клуб" children={<p>Информация</p>} />

        <Block headerText="Контакты" children={<p>Телеграм и тд</p>} />
      </div>
      <div className="flex">
        <Block headerText="Галерея" children={<p>Фотографии</p>} />
      </div>
    </div>
  );
}
