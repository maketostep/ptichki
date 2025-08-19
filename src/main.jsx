import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import EventPage from "./pages/EventPage";
import FormPage from "./pages/FormPage";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/form" element={<FormPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
