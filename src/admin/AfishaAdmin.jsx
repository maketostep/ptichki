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
      console.log(data);
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

      <form onSubmit={handleSubmit} className="mb-6 gap-10 space-y-4 space-x-5">
        <textarea
          placeholder="Описание"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="border w-full p-2 rounded"
        />
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
          className="border-amber-300 border-2 rounded-lg p-2 w-full sm:w-auto"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Добавить
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <ul className="space-y-6">
        {posters.map((p) => (
          <li
            key={p.id}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 bg-gray-50 p-4 rounded-lg shadow"
          >
            <img
              src={`https://dabozgofuelog.beget.app${p.image_url}`}
              alt=""
              className="w-32 h-32 object-cover rounded-2xl"
            />
            <div className="flex-1 w-full">
              <h2 className="font-semibold mb-2">Превью:</h2>
              <div className="bg-white rounded-2xl p-4 shadow-md max-w-full md:max-w-[500px]">
                <p className="whitespace-pre-line text-sm sm:text-base md:text-lg lg:text-xl">
                  {p.description}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDelete(p.id)}
              className="bg-red-500 text-white px-3 py-1 rounded mt-4 md:mt-0"
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
