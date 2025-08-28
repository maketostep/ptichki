import { NavLink } from "react-router";

export default function NavigationLinks({ handleClose }) {
  const handleClicked = () => {
    handleClose();
  };
  return (
    <>
      <NavLink
        onClick={handleClicked}
        className={({ isActive }) => (isActive ? "underline" : "")}
        to="/"
      >
        Наш клуб
      </NavLink>
      <h1 className="text-4xl">·</h1>
      <NavLink
        onClick={handleClicked}
        className={({ isActive }) => (isActive ? "underline" : "")}
        to="/form"
      >
        Хочу быть птичкой
      </NavLink>
      <h1 className="text-4xl">·</h1>
      <NavLink
        onClick={handleClicked}
        className={({ isActive }) => (isActive ? "underline" : "")}
        to="/event"
      >
        Следующее мероприятие
      </NavLink>
    </>
  );
}
