export default async function sendFormData(data) {
  console.log(data);
  try {
    const res = await fetch("/api/user-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    if (res.success) {
      console.log("Успешно");
      return true;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
