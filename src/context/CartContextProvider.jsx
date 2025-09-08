import { useContext, useState } from "react";
import CartContext from "./CartContext";
import productcontext from "./ProductContext";
export default function CartContextProvider({ children }) {
  const { products } = useContext(productcontext)
  const [cartProducts, setCartProducts] = useState([]);
  const addToCart = (index) => {
    const productToAdd = products[index]
    const existing = cartProducts.find((product) =>
      product.id === productToAdd.id
    )
    console.log(existing);

    if (existing) {
      setCartProducts(
        cartProducts.map(product =>
          product.id === existing.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      )
      alert("Product Quantity Added Successfylly")

    }
    else {
      setCartProducts([...cartProducts, { ...productToAdd, quantity: 1 }]);
      alert("Product AddToCart Successfylly")

    }
  };


  const removeProduct = (id) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ addToCart, cartProducts, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}
