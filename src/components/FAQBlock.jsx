import FAQ from "./ui/FAQ";
import WalpaperPattern from "./ui/WalpaperPattern";
import { CiSquarePlus } from "react-icons/ci";
export default function FAQBlock() {
  return (
    <div className="h-screen bg-white overflow-x-hidden overflow-y-hidden relative">
      <WalpaperPattern pattern="green" />
      <div className="flex flex-col relative gap-15">
        <div className="flex justify-start items-start  mt-30 gap-15 z-5 ml-15">
          <div className="flex text-center bg-red rounded-[100px] p-10 gap-5">
            <h1 className="text-6xl text-center font-extrabold text-white">
              ответы на вопросы:
            </h1>
          </div>
        </div>
        <FAQ />
      </div>
    </div>
  );
}
