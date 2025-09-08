import { useContext, useState } from "react";
import CartContext from "../context/CartContext";

export default function AddToCartPage() {

  const { cartProducts,removeProduct } = useContext(CartContext)
  console.log(cartProducts);




  const total = cartProducts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-purple-900 to-black text-white">
      <h1 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400">
        Your Cart
      </h1>

      {cartProducts.length === 0 ? (
        <p className="text-center text-purple-300 text-lg">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cartProducts.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-purple-950/30 border border-purple-700/30 rounded-xl shadow-md p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain bg-white rounded-md"
              />
              <div className="flex-1 text-left">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-purple-300">
                  ${item.price.toFixed(2)} × {item.quantity}
                </p>
                <p className="text-purple-100 font-bold">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeProduct(item.id)}
                className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <div className="text-right mt-6">
            <h3 className="text-2xl font-bold text-purple-100">
              Cart Total: ${total.toFixed(2)}
            </h3>
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 rounded-xl font-semibold shadow-lg transition">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
