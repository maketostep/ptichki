import { useEffect, useState, useRef } from "react";
import {
  getPartners,
  addPartner,
  deletePartner,
} from "../services/partnersService.js";

export default function PartnersAdmin() {
  const [partners, setPartners] = useState([]);
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [url, setUrl] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    loadPartners();
  }, []);

  async function loadPartners() {
    try {
      const data = await getPartners();
      setPartners(data);
    } catch (err) {
      setError(err.message || "Не удалось загрузить партнёров");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addPartner({ description: desc, url: url, file: file });

      setDesc("");
      setFile(null);
      setUrl("");
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      loadPartners();
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deletePartner(id);
      loadPartners();
    } catch (err) {
      setError(err.message || "Ошибка при удалении");
    }
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Партнёры</h1>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center space-y-4 flex-wrap mb-6"
      >
        <textarea
          placeholder="Описание"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="flex border w-[500px] p-2 mr-2"
        />
        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex border p-2 mr-2"
        />
        <input
          type="file"
          ref={fileInputRef} // подключаем ref
          onChange={(e) => setFile(e.target.files[0])}
          className="mr-2 border-amber-300 border-2 rounded-lg p-2 w-full sm:w-auto"
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
        {partners.map((p) => (
          <li
            key={p.id}
            className="flex flex-wrap border border-red rounded-xl p-5 items-center gap-4 mb-4"
          >
            <img
              src={`https://dabozgofuelog.beget.app${p.image_url}`}
              alt=""
              className="w-24 h-24 object-cover rounded-2xl"
            />
            <p className="whitespace-pre-line border p-2 rounded-2xl border-green">
              {p.description}
            </p>
            <a
              className="underline"
              href={p.partner_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.partner_url}
            </a>
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
