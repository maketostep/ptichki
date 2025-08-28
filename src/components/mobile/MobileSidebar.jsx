import { useState } from "react";
import Sidebar from "../ui/Sidebar";
import birds from "../../assets/img/logo/mobile/bird-logo.webp";
export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div className="flex">
      <Sidebar
        isOpen={isOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
        backTextButton="Вернуться"
        Logo={<img className="w-40 m-10" src={birds} alt="bird-logo" />}
      />
    </div>
  );
}
