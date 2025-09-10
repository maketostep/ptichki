import HeroBlock from "./components/HeroBlock";
import InformationBlock from "./components/InformationBlock";
import PosterBlock from "./components/PosterBlock";
import FAQBlock from "./components/FAQBlock";
import ContactBlock from "./components/ContactBlock";
import { Slide, ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-yellow">
      <HeroBlock />
      <InformationBlock />
      <PosterBlock />
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
