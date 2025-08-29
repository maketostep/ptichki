import { useState } from "react";
import Form from "../components/Form";
import Block from "../components/ui/Block";
import sendFormData from "../services/sendFormData";
import { ToastContainer, toast } from "react-toastify";

export default function FormPage() {
  const [formData, setFormData] = useState({
    name: "",
    tel: "",
    email: "",
    city: "",
  });

  const handleSubmit = async (e) => {
    const loadingToast = toast.loading("Загрузка...");
    e.preventDefault();
    const response = await sendFormData(formData);
    if (response) {
      toast.dismiss(loadingToast);
      toast.success("Успешно!");
    } else {
      toast.dismiss(loadingToast);
      toast.error("Ошибка!");
    }
  };

  const handleChangeInfo = (changedData) => {
    setFormData((prev) => ({
      ...prev,
      ...changedData,
    }));
  };

  return (
    <div className="flex flex-col gap-5 m-7 mt-0">
      <Block
        headerText="Регистрация"
        children={
          <Form
            handleChangeInfo={handleChangeInfo}
            handleSubmit={handleSubmit}
          />
        }
      />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
