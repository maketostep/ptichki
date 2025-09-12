import { FAQConfig } from "./mainConfig";
import FAQ from "./ui/FAQ";
import WalpaperPattern from "./ui/WalpaperPattern";
export default function FAQBlock() {
  const { headerText, questionsAndAnswers } = FAQConfig;
  return (
    <div className="min-h-screen  bg-white overflow-x-hidden overflow-y-hidden relative">
      <WalpaperPattern pattern="green" />
      <div className="flex flex-col relative gap-15">
        <div className="flex justify-center items-center md:justify-start md:items-start md:mt-30 mt-5 gap-15 z-5 md:ml-15">
          <div className="flex text-center bg-red rounded-[100px] p-10 gap-5">
            <h1 className="text-2xl md:text-6xl text-center font-extrabold text-white z-0">
              {headerText}
            </h1>
          </div>
        </div>
        <FAQ faqData={questionsAndAnswers} />
      </div>
    </div>
  );
}
