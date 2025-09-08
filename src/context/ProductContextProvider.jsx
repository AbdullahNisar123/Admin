import { useEffect, useState } from "react";
import productcontext from "./ProductContext";

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching producsts:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <productcontext.Provider value={{ products }}>
      {children}
    </productcontext.Provider>
  );
}
