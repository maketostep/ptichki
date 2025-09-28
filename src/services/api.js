const API_URL = "https://dabozgofuelog.beget.app/api";

function getHeaders() {
  const token = localStorage.getItem("authToken");
  return token
    ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    : { "Content-Type": "application/json" };
}

export async function loginUser(login, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ login, password }),
  });

  if (!res.ok) {
    throw new Error("Неверный логин или пароль");
  }

  return res.json(); // { token }
}

export async function fetchWithAuth(url, options = {}) {
  const res = await fetch(`${API_URL}${url}`, {
    ...options,
    headers: { ...getHeaders(), ...(options.headers || {}) },
  });

  if (!res.ok) {
    throw new Error(`Ошибка: ${res.status}`);
  }

  return res.json();
}
