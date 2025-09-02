import Header from "./components/Header";
import Footer from "./components/Footer";
import Router from "./Config/Router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <>

      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
          <Header />
          <main className="flex-grow container mx-auto px-6 py-10">
            <Router />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>

  );
}
