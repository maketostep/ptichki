import { useState } from "react";
import Sidebar from "../ui/Sidebar";

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
        Logo={<img src={""} alt="logo" />}
      />
    </div>
  );
}
