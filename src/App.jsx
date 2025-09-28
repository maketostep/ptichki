import HeroBlock from "./components/HeroBlock";
import InformationBlock from "./components/InformationBlock";
import PosterBlock from "./components/PosterBlock";
import FAQBlock from "./components/FAQBlock";
import ContactBlock from "./components/ContactBlock";
import { Slide, ToastContainer } from "react-toastify";
import PartnersBlock from "./components/PartnersBlock";

function App() {
  return (
    <div className="flex flex-col w-full">
      <HeroBlock />
      <InformationBlock />
      <PosterBlock />
      <PartnersBlock />
      <FAQBlock />
      <ContactBlock />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        transition={Slide}
        theme="light"
      />
    </div>
  );
}

export default App;
