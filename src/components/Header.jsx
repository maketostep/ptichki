import logo from "../assets/img/logo/yellow.webp";
import logoMobile from "../assets/img/logo/mobile/black.webp";
import MobileSidebar from "./mobile/MobileSidebar";
import NavigationLinks from "./NavigationLinks";
export default function Header() {
  return (
    <header className="flex justify-around p-2 mb-7 w-full min-h-15 bg-green shadow-2xl rounded-b-4xl">
      <div className="flex">
        <div className="m-5 border-r-2 hidden md:block border-yellow" />
        <div className="flex text-center flex-col">
          <img className="w-75 mr-4 hidden md:block" src={logo} alt="logo" />
          <img
            className="w-50 mr-4 block md:hidden"
            src={logoMobile}
            alt="logo"
          />
        </div>
        <div className="m-5 border-r-2 border-yellow" />
      </div>
      <div className="hidden font-extrabold md:flex justify-center text-yellow items-center text-3xl gap-5">
        <NavigationLinks />
      </div>
      <MobileSidebar />
    </header>
  );
}
