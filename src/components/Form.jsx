export default function Form() {
  return (
    <div className="flex m-5">
      <form
        className="flex flex-col text-center text-3xl gap-2"
        action="submit"
      >
        <label className="font-bold">Ваше имя:</label>
        <input
          type="text"
          required
          placeholder="Анастасия"
          className="p-2 border border-gray-300 rounded"
        />
        <label className="font-bold">Ваш возраст:</label>
        <input
          type="number"
          required
          placeholder="25"
          className="p-2 border border-gray-300 rounded"
        />
        <label className="font-bold">Email:</label>
        <input
          type="email"
          required
          placeholder="example@mail.com"
          className="p-2 border border-gray-300 rounded"
        />
        <label className="font-bold">Город:</label>
        <select required className="p-2 border border-gray-300 rounded">
          <option value="" disabled selected>
            Выберите город
          </option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Новосибирск">Ставрополь</option>
        </select>
        <button
          type="submit"
          className="bg-amber-600 text-white p-2 mt-5 rounded hover:scale-102 hover:shadow-lg transition-all duration-300"
        >
          Отправить
        </button>
      </form>
    </div>
  );
}
