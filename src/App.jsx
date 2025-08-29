import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-yellow">
      <Header />
      <main className="flex-grow h-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
