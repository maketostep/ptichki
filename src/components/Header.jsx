import { NavLink } from "react-router";
import logo from "../assets/img/logo.webp";
export default function Header() {
  return (
    <header className="flex justify-around p-2 mb-7 w-full min-h-15 bg-amber-300 shadow-xl rounded-b-4xl">
      <div className="flex items-center text-3xl">Место для логотипа</div>
      <div className="flex">
        <div className="m-5 border-r-2 border-black" />
        <div className="flex flex-col">
          <h1 className="text-3xl">Женское сообщество</h1>
          <img className="w-75" src={logo} alt="logo" />
        </div>
        <div className="m-5 border-r-2 border-black" />
      </div>

      <div className="flex justify-center items-center text-3xl gap-5">
        <NavLink className={({ isActive }) => isActive && "underline"} to="/">
          Наш клуб
        </NavLink>
        <h1 className="text-4xl">·</h1>
        <NavLink
          className={({ isActive }) => isActive && "underline"}
          to="/form"
        >
          Хочу быть птичкой
        </NavLink>
        <h1 className="text-4xl">·</h1>
        <NavLink
          className={({ isActive }) => isActive && "underline"}
          to="/event"
        >
          Следующее мероприятие
        </NavLink>
      </div>
    </header>
  );
}
