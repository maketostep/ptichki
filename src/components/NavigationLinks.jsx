import { NavLink } from "react-router";
import bird from "../assets/img/ptica2.webp";
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
      <h1 className="text-4xl">
        <img className="w-6" src={bird} alt="Птица" />
      </h1>
      <NavLink
        onClick={handleClicked}
        className={({ isActive }) => (isActive ? "underline" : "")}
        to="/form"
      >
        Хочу быть птичкой
      </NavLink>
      <img className="w-6" src={bird} alt="Птица" />
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
