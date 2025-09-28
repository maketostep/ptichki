import { fetchWithAuth } from "./api.js";

export async function getPartners() {
  return fetchWithAuth("/partners");
}

export async function addPartner({ description, url, file }) {
  const formData = new FormData();
  formData.append("description", description);
  formData.append("url", url);
  if (file) formData.append("image", file);

  const res = await fetch("https://dabozgofuelog.beget.app/api/partners", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Ошибка при добавлении партнёра");
  }

  return res.json();
}

export async function deletePartner(id) {
  return fetchWithAuth(`/partners/${id}`, { method: "DELETE" });
}
