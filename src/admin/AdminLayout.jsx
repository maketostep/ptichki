import { Outlet, Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function AdminLayout() {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <aside
        className="
          w-full md:w-64 
          bg-gray-100 p-4 border-b md:border-b-0 md:border-r
        "
      >
        <h2 className="text-lg font-bold mb-4 text-center md:text-left">
          Админ-панель
        </h2>
        <nav
          className="
            flex flex-row md:flex-col gap-4 justify-center md:justify-start
          "
        >
          <Link to="/admin/afisha" className="hover:underline">
            Афиша
          </Link>
          <Link to="/admin/partners" className="hover:underline">
            Партнёры
          </Link>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>
    </div>
  );
}
