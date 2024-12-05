import { Routes } from "react-router-dom";
import routes from "./routes/routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ backgroundColor: "rgb(248, 248, 248)" }}
    >
      <Nav />

      {/* Main Content */}
      <main className="flex-grow mx-auto w-full max-w-screen-lg">
        <Routes>{routes.map((value) => value)}</Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
