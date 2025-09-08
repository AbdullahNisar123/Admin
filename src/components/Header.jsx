import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function Header() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
    { path: "/admin", label: "Admin" },
    { path: "/cart", label: "Cart" },
  ];
  const name = useContext(AuthContext)
  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-lg shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          MyApp
        </Link>
        
        <div className="space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? "text-purple-400 font-semibold"
                  : "hover:text-purple-300"
              } transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
