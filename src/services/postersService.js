import { fetchWithAuth } from "./api.js";

export async function getPosters() {
  return fetchWithAuth("/posters");
}

export async function addPoster({ description, file }) {
  const formData = new FormData();
  formData.append("description", description);
  if (file) formData.append("image", file);

  const res = await fetch("https://dabozgofuelog.beget.app/api/posters", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Ошибка при добавлении постера");
  }

  return res.json();
}

export async function deletePoster(id) {
  return fetchWithAuth(`/posters/${id}`, { method: "DELETE" });
}
