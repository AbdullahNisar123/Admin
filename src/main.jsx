import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthContextProvider from "./context/AuthContextProvider";
import ProductContextProvider from "./context/ProductContextProvider.jsx";
import CartContextProvider from "./context/CartContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ProductContextProvider>
    <CartContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </CartContextProvider>
  </ProductContextProvider>
);
