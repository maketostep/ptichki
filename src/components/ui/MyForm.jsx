import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import sendFormData from "../../services/sendFormData";
import { toast } from "react-toastify";
import { useState } from "react";

// Схема валидации
const schema = yup.object().shape({
  name: yup.string().required("Введите имя, и фамилию"),
  phone: yup
    .string()
    .matches(/^[0-9+\-()\s]{6,20}$/, "Некорректный номер")
    .required("Введите номер"),
  // email: yup.string().email("Некорректный email").required("Введите email"),
  city: yup.string().required("Выберите город"),
  terms: yup.boolean().oneOf([true], "Необходимо принять условия"),
  review: yup.boolean(),
  ads: yup.boolean(),
});

export default function MyForm({ closeModal }) {
  const [activeButton, setActiveButton] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setActiveButton(false);
    console.log("Форма отправлена:", data);
    const success = await sendFormData(data);
    if (success) {
      closeModal();
      toast.success("Форма успешно отправлена");
      setActiveButton(true);
    } else {
      toast.error("Ошибка при отправке формы");
      setActiveButton(true);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col bg-white rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-xl md:text-3xl font-semibold text-gray-800 text-center">
          Регистрация
        </h2>

        {/* Имя */}
        <div className="md:text-xl">
          <label className="block  font-medium text-gray-700 mb-1">
            Имя, Фамилия
          </label>
          <input
            type="text"
            {...register("name")}
            className="w-full border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />
          <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
        </div>

        {/* Номер */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Номер</label>
          <input
            type="text"
            {...register("phone")}
            className="w-full border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />
          <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>
        </div>

        {/* Email */}
        {/* <div>
          <label className="block font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            {...register("email")}
            className="w-full border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div> */}

        {/* Город */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Город</label>
          <select
            {...register("city")}
            className="w-full border-gray-300 rounded-xl px-4 py-2 shadow-sm bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          >
            <option value="">-- выберите город --</option>
            <option value="Ставрополь">Ставрополь</option>
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
          </select>
          <p className="text-red-500 text-sm mt-1">{errors.city?.message}</p>
        </div>

        {/* 1 Согласие на обработку персональных данных */}
        <div className="flex items-center mb-4">
          <input type="checkbox" {...register("terms")} className="mr-2" />
          <label className="text-sm text-gray-600">
            Даю{" "}
            <a
              href="https://disk.yandex.ru/i/E7LrcGOTRr95fw"
              className="text-blue-500 underline"
            >
              согласие
            </a>{" "}
            на обработку моих персональных данных, в соответствии с{" "}
            <a
              href="https://disk.yandex.ru/i/qgiWEQPbOwHnLw"
              className="text-blue-500 underline"
            >
              Политикой обработки персональных данных
            </a>
            .
          </label>
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.terms?.message}</p>

        {/* 2 Cогласие на обработку персональных данных, разрешенных для распространения */}
        <div className="flex items-center mb-4">
          <input type="checkbox" {...register("review")} className="mr-2" />
          <label className="text-sm text-gray-600">
            Даю{" "}
            <a
              href="https://disk.yandex.ru/i/84M0SL9RPYp1QA"
              className="text-blue-500 underline"
            >
              согласие на обработку персональных данных, разрешенных для
              распространения
            </a>
            .
          </label>
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.ads?.message}</p>

        {/* 3 Согласие на получение рекламной и информационной рассылки */}
        <div className="flex items-center mb-4">
          <input type="checkbox" {...register("ads")} className="mr-2" />
          <label className="text-sm text-gray-600">
            Даю{" "}
            <a
              href="https://disk.yandex.ru/i/1ZNzPbXWoqZ5dA"
              className="text-blue-500 underline"
            >
              согласие на получение рекламной и информационной рассылки
            </a>
            .
          </label>
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.ads?.message}</p>

        {/* Согласие с условиями оферты
        <div className="flex items-center mb-4">
          <input type="checkbox" {...register("oferta")} className="mr-2" />
          <label className="text-sm text-gray-600">
            Выражаю согласие с условиями{" "}
            <a href="/terms" className="text-blue-500 underline">
              Оферты
            </a>
            .
          </label>
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.oferta?.message}</p> */}

        {/* Кнопка */}
        <button
          type="submit"
          disabled={!activeButton}
          className={`w-full bg-${activeButton ? "green" : "yellow"} hover:scale-102 text-white py-3 rounded-xl font-medium hover:bg-red cursor-pointer shadow-md transition`}
        >
          {activeButton ? "Отправить" : "Загрузка..."}
        </button>
      </form>
    </>
  );
}
