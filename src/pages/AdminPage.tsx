import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import productcontext from "../context/ProductContext";
import CartContext from "../context/CartContext";

export default function AdminPage() {
  const { LogOut } = useContext(AuthContext);
  const {products} = useContext(productcontext)
  const {addToCart} = useContext(CartContext)
  
  

  const handleLogOut = async () => {
    await LogOut();
  };

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        <button
          onClick={handleLogOut}
          className="px-5 py-2 bg-gradient-to-r from-red-500 to-pink-600 hover:opacity-90 rounded-xl font-semibold shadow-md transition"
        >
          Logout
        </button>
      </div>

      <p className="text-lg text-purple-200 max-w-xl mx-auto">
        This page is only visible for logged-in users. Manage your content, users, and settings here.
      </p>

      {/* Admin Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-purple-950/40 border border-purple-700/40 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Users</h3>
          <p className="text-purple-300">Manage registered users.</p>
        </div>
        <div className="bg-purple-950/40 border border-purple-700/40 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Content</h3>
          <p className="text-purple-300">Edit or add new content.</p>
        </div>
        <div className="bg-purple-950/40 border border-purple-700/40 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Settings</h3>
          <p className="text-purple-300">Adjust your preferences.</p>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-purple-100 mb-6 text-left">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Card 1 */}
          {
            products.map((product,index)=>{
              return(

                <div className="bg-black/30 border border-purple-700/30 rounded-xl shadow-md overflow-hidden" key={index}>
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain"
              />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-white">{product.title}</h3>
              <p className="text-purple-300 text-sm">{product.description}</p>
              <div className="mt-2 text-purple-100 font-bold">${product.price}</div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                onClick={()=>addToCart(index)}
                >
                  AddToCart
                </button>
                <button className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
            )
            })
          }
          

          {/* Product Card 2 */}
          <div className="bg-purple-900/30 border border-purple-700/30 rounded-xl shadow-md overflow-hidden">
            <img
              src="https://via.placeholder.com/400x200"
              alt="Product 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-white">Product Two</h3>
              <p className="text-purple-300 text-sm">Another great product for your inventory.</p>
              <div className="mt-2 text-purple-100 font-bold">$79.99</div>
              <div className="mt-4 flex gap-2">
                <button className="px-3 py-1 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                  Edit
                </button>
                <button className="px-3 py-1 text-sm bg-red-600 hover:bg-red-700 text-white rounded-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
