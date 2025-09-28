import { Outlet, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function AdminLayout() {
  const token = localStorage.getItem("authToken");

  // если нет токена → редирект на /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // если токен есть → рендерим вложенные роуты
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4 border-r">
        <h2 className="text-lg font-bold mb-4">Админ-панель</h2>
        <nav className="flex flex-col gap-2">
          <Link to="/admin/afisha" className="hover:underline">Афиша</Link>
          <Link to="/admin/partners" className="hover:underline">Партнёры</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
