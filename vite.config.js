import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Проксируем все запросы с префиксом /api на наш backend Express.js
      "/api": {
        target: "http://localhost:4000", // адрес нашего backend
        changeOrigin: true, // меняет Origin заголовок на target
        rewrite: (path) => path.replace(/^\/api/, ""), // убирает /api из пути
        secure: false, // если backend без HTTPS
      },
    },
  },
});
