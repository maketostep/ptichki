import { HiMenu } from "react-icons/hi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import NavigationLinks from "../NavigationLinks";

export default function Sidebar({
  isOpen,
  handleClose,
  handleOpen,
  backTextButton,
  Logo,
}) {
  return (
    <>
      <div className="flex md:hidden items-center">
        <HiMenu onClick={handleOpen} className="w-15 h-13 cursor-pointer" />
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-amber-200 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex text-3xl text-center flex-col p-4">
          <div
            onClick={handleClose}
            className="bg-amber-100 p-2 rounded-md text-2l flex items-center justify-around w-auto cursor-pointer"
          >
            <HiOutlineArrowLeft />
            {backTextButton}
          </div>

          {/* ТУТ БУДЕТ ЛОГОТИП */}
          <div className="py-2">{Logo}</div>
          <NavigationLinks />
        </div>
        <div className="absolute font-sans bottom-0 left-0 w-full text-center text-sm text-gray-600">
          by Wave Web Studio
        </div>
      </div>
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50"
        />
      )}
    </>
  );
}
