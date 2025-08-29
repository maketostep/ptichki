import BottomBirds from "../components/home/BottomBirds";
import ContactChildren from "../components/home/ContactChildren";
import GalleryChildren from "../components/home/GalleryChildren";
import InfoChildren from "../components/home/InfoChildren";
import Block from "../components/ui/Block";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5 mt-5 mx-2 md:mx-10">
      <div className="flex flex-col text-yellow md:flex-row w-full h-auto justify-start items-stretch gap-5 flex-grow">
        <Block headerText="Наш клуб" children={<InfoChildren />} />
        <div className="flex flex-col gap-5">
          <Block headerText="Контакты" children={<ContactChildren />} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row h-auto justify-start items-stretch gap-5">
        <Block headerText="Галерея" children={<GalleryChildren />} />
      </div>
    </div>
  );
}
