export default function Form({ handleChangeInfo, handleSubmit }) {
  return (
    <div className="flex m-5">
      <form
        className="flex flex-col text-center text-3xl gap-2"
        action="submit"
        onSubmit={handleSubmit}
      >
        <label className="font-bold">Ваше имя:</label>
        <input
          type="text"
          required
          placeholder="Анастасия"
          onChange={(e) => handleChangeInfo({ name: e.target.value })}
          className="p-2 border border-gray-300 rounded"
        />
        <label className="font-bold">Контактный номер:</label>
        <input
          type="tel"
          required
          placeholder="+7 999 888 77 66"
          onChange={(e) => handleChangeInfo({ tel: e.target.value })}
          className="p-2 border border-gray-300 rounded"
        />
        <label className="font-bold">Email:</label>
        <input
          type="email"
          required
          placeholder="example@mail.com"
          onChange={(e) => handleChangeInfo({ email: e.target.value })}
          className="p-2 border border-gray-300 rounded"
        />
        <label className="font-bold">Город:</label>
        <select
          defaultValue="default"
          required
          onChange={(e) => handleChangeInfo({ city: e.target.value })}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="default" selected disabled>
            Выберите город
          </option>
          <option value="Москва">Москва</option>
          <option value="Санкт-Петербург">Санкт-Петербург</option>
          <option value="Ставрополь">Ставрополь</option>
        </select>
        <button className="bg-amber-600 text-white p-2 mt-5 rounded hover:scale-102 hover:shadow-lg transition-all duration-300">
          Отправить
        </button>
      </form>
    </div>
  );
}
