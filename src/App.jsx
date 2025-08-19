import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full bg-amber-50">
      <Header />
      <main className="flex-1 w-full h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
