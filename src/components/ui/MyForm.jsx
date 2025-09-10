import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import sendFormData from "../../services/sendFormData";
import { toast } from "react-toastify";

// Схема валидации
const schema = yup.object().shape({
  name: yup.string().required("Введите имя"),
  phone: yup
    .string()
    .matches(/^[0-9+\-()\s]{6,20}$/, "Некорректный номер")
    .required("Введите номер"),
  email: yup.string().email("Некорректный email").required("Введите email"),
  city: yup.string().required("Выберите город"),
});

export default function MyForm({ closeModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log("Форма отправлена:", data);
    const success = await sendFormData(data);
    if (success) {
      closeModal();
      toast.success("Форма успешно отправлена");
    } else {
      toast.error("Ошибка при отправке формы");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white  rounded-2xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Регистрация
        </h2>

        {/* Имя */}
        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">
            Имя
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
          <label className="block text-xl font-medium text-gray-700 mb-1">
            Номер
          </label>
          <input
            type="text"
            {...register("phone")}
            className="w-full border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />
          <p className="text-red-500 text-sm mt-1">{errors.phone?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="w-full border-gray-300 rounded-xl px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition"
          />
          <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>
        </div>

        {/* Город */}
        <div>
          <label className="block text-xl font-medium text-gray-700 mb-1">
            Город
          </label>
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

        {/* Кнопка */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-medium hover:bg-blue-600 shadow-md transition"
        >
          Отправить
        </button>
      </form>
    </>
  );
}
