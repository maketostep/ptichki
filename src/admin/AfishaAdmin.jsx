import { useEffect, useState, useRef } from "react";
import {
  getPosters,
  addPoster,
  deletePoster,
} from "../services/postersService.js";

export default function AfishaAdmin() {
  const [posters, setPosters] = useState([]);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const fileInputRef = useRef(null);

  useEffect(() => {
    loadPosters();
  }, []);

  async function loadPosters() {
    try {
      const data = await getPosters();
      setPosters(data);
    } catch (err) {
      setError(err.message || "Не удалось загрузить афишу");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addPoster({ description: desc, file });
      setDesc("");
      setFile(null);

      // Сбрасываем поле выбора файла
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      loadPosters();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deletePoster(id);
      loadPosters();
    } catch (err) {
      setError(err.message || "Ошибка при удалении");
    }
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Афиша</h1>

      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          placeholder="Описание"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border w-full p-2 mr-2"
        />
        <input
          type="file"
          ref={fileInputRef} // подключаем ref
          onChange={(e) => setFile(e.target.files[0])}
          className="mr-2 border-amber-300 border-2 rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Добавить
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <ul>
        {posters.map((p) => (
          <li key={p.id} className="flex items-center gap-4 mb-4">
            <img
              src={`https://dabozgofuelog.beget.app${p.image_url}`}
              alt=""
              className="w-24 h-24 object-cover rounded-2xl"
            />
            <div className="flex">
              <h1>Превью:</h1>
              <div className="p-5 flex w-[500px] space-y-6">
                <p className=" bg-white rounded-4xl p-5 shadow-md whitespace-pre-line text-base sm:text-lg md:text-2xl">
                  {p.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(p.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
