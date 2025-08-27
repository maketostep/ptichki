import logo from "../assets/img/logo.webp";
import MobileSidebar from "./mobile/MobileSidebar";
import NavigationLinks from "./NavigationLinks";
export default function Header() {
  return (
    <header className="flex justify-around p-2 mb-7 w-full min-h-15 bg-amber-300 shadow-xl rounded-b-4xl">
      <div className="flex items-center md:text-3xl">Место для логотипа</div>
      <div className="flex">
        <div className="m-5 border-r-2 border-black" />
        <div className="flex text-center flex-col">
          <h1 className="md:text-3xl">Женское сообщество</h1>
          <img className="w-75" src={logo} alt="logo" />
        </div>
        <div className="m-5 border-r-2 border-black" />
      </div>
      <div className="hidden md:flex justify-center items-center text-3xl gap-5">
        <NavigationLinks />
      </div>
      <MobileSidebar />
    </header>
  );
}
