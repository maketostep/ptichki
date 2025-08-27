import { NavLink } from "react-router";

export default function NavigationLinks() {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : "")}
        to="/"
      >
        Наш клуб
      </NavLink>
      <h1 className="text-4xl">·</h1>
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : "")}
        to="/form"
      >
        Хочу быть птичкой
      </NavLink>
      <h1 className="text-4xl">·</h1>
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : "")}
        to="/event"
      >
        Следующее мероприятие
      </NavLink>
    </>
  );
}
