import { fetchWithAuth } from "./api.js";

export async function getPartners() {
  return fetchWithAuth("/partners");
}

export async function addPartner({ description, url, file, footer_text }) {
  const formData = new FormData();
  formData.append("description", description);
  formData.append("url", url);
  formData.append("footer_text", footer_text);
  if (file) formData.append("image", file);
  console.log(formData.entries());
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
