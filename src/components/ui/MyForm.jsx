import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Fieldset, Field, Label, Input, Description } from "@headlessui/react";
import sendFormData from "../../services/sendFormData";
import { toast } from "react-toastify";
import { useModal } from "../../context/ModalContext";
import RegistrationSuccess from "./RegistrationSuccess";

const schema = yup.object().shape({
  name: yup.string().required("Введите имя, и фамилию"),
  phone: yup
    .string()
    .matches(/^\+7\d{10}$/, "Введите номер в формате +7 и 10 цифр")
    .required("Введите номер"),
  city: yup.string().required("Выберите город"),
  terms: yup.boolean().oneOf([true], "Необходимо принять условия"),
  review: yup.boolean(),
  ads: yup.boolean(),
});

const baseInputClass =
  "w-full h-10 border-gray-300 rounded-xl px-4 text-base shadow-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition";

export default function MyForm({ closeModal }) {
  const [activeButton, setActiveButton] = useState(true);
  const { openModal } = useModal();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      phone: "+7",
    },
  });

  const enforcePhonePrefix = (value) => {
    const digits = value.replace(/\D/g, "");
    const trimmed =
      digits.startsWith("7") || digits.startsWith("8")
        ? digits.slice(1)
        : digits;
    const limited = trimmed.slice(0, 10);
    return `+7${limited}`;
  };

  const onSubmit = async (data) => {
    setActiveButton(false);
    console.log("Форма отправлена:", data);
    const success = await sendFormData(data);
    if (success) {
      closeModal();
      toast.success("Форма успешно отправлена");
      openModal(RegistrationSuccess, { title: "Регистрация" });
      setActiveButton(true);
    } else {
      toast.error("Ошибка при отправке формы");
      setActiveButton(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-white rounded-2xl p-8 space-y-6"
    >
      <h2 className="text-xl md:text-3xl font-semibold text-gray-800 text-center">
        Регистрация
      </h2>

      <Fieldset className="space-y-6">
        <Field>
          <Label
            htmlFor="name"
            className="block font-medium text-gray-700 md:text-xl mb-1"
          >
            Имя, Фамилия
          </Label>
          <Input
            id="name"
            type="text"
            {...register("name")}
            className={baseInputClass}
          />
          {errors.name?.message ? (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          ) : null}
        </Field>

        <Field>
          <Label
            htmlFor="phone"
            className="block font-medium text-gray-700 md:text-xl mb-1"
          >
            Номер
          </Label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                id="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                {...field}
                value={field.value}
                onChange={(event) =>
                  field.onChange(enforcePhonePrefix(event.target.value))
                }
                onBlur={(event) => {
                  field.onBlur();
                  field.onChange(enforcePhonePrefix(event.target.value));
                }}
                className={baseInputClass}
              />
            )}
          />
          {errors.phone?.message ? (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          ) : null}
          <Description className="text-xs text-gray-500">
            Формат: +7 и 10 цифр
          </Description>
        </Field>

        <Field>
          <Label
            htmlFor="city"
            className="block font-medium text-gray-700 md:text-xl mb-1"
          >
            Город
          </Label>
          <select
            id="city"
            {...register("city")}
            className={`${baseInputClass} bg-white`}
          >
            <option value="">-- выберите город --</option>
            <option value="Ставрополь">Ставрополь</option>
            <option value="Москва">Москва</option>
            <option value="Санкт-Петербург">Санкт-Петербург</option>
          </select>
          {errors.city?.message ? (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          ) : null}
        </Field>
      </Fieldset>

      <Fieldset className="space-y-6">
        <Field>
          <div className="flex items-start gap-2">
            <input
              id="terms"
              type="checkbox"
              {...register("terms")}
              className="mt-1"
            />
            <Label htmlFor="terms" className="text-sm text-gray-600">
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
            </Label>
          </div>
          {errors.terms?.message ? (
            <p className="text-red-500 text-sm mt-1">{errors.terms.message}</p>
          ) : null}
        </Field>

        <Field>
          <div className="flex items-start gap-2">
            <input
              id="review"
              type="checkbox"
              {...register("review")}
              className="mt-1"
            />
            <Label htmlFor="review" className="text-sm text-gray-600">
              Даю{" "}
              <a
                href="https://disk.yandex.ru/i/84M0SL9RPYp1QA"
                className="text-blue-500 underline"
              >
                согласие на обработку персональных данных, разрешенных для
                распространения
              </a>
              .
            </Label>
          </div>
          {errors.review?.message ? (
            <p className="text-red-500 text-sm mt-1">{errors.review.message}</p>
          ) : null}
        </Field>

        <Field>
          <div className="flex items-start gap-2">
            <input
              id="ads"
              type="checkbox"
              {...register("ads")}
              className="mt-1"
            />
            <Label htmlFor="ads" className="text-sm text-gray-600">
              Даю{" "}
              <a
                href="https://disk.yandex.ru/i/1ZNzPbXWoqZ5dA"
                className="text-blue-500 underline"
              >
                согласие на получение рекламной и информационной рассылки
              </a>
              .
            </Label>
          </div>
          {errors.ads?.message ? (
            <p className="text-red-500 text-sm mt-1">{errors.ads.message}</p>
          ) : null}
        </Field>
      </Fieldset>

      <button
        type="submit"
        disabled={!activeButton}
        className={`w-full bg-${activeButton ? "green" : "yellow"} hover:scale-102 text-white py-3 rounded-xl font-medium hover:bg-red cursor-pointer shadow-md transition`}
      >
        {activeButton ? "Отправить" : "Загрузка..."}
      </button>
    </form>
  );
}
