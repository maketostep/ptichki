import { FAQConfig } from "./mainConfig";
import FAQ from "./ui/FAQ";
import blockFive from "../assets/img/background/blockFive.png";
export default function FAQBlock() {
  const { questionsAndAnswers } = FAQConfig;
  return (
    <div
      className="min-h-[1080px] bg-cover bg-center bg-no-repeat overflow-x-hidden overflow-y-hidden relative"
      style={{ backgroundImage: `url(${blockFive})` }}
    >
      <div className="flex flex-col justify-center items-center content-center relative gap-15">
        <FAQ faqData={questionsAndAnswers} />
      </div>
    </div>
  );
}
