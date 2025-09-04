import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { Login } = useContext(AuthContext)
  const navigate = useNavigate()
  const handleLogin = async () => {
    if (!email || !password) {
      console.log("Enter All Values");
      return

    }
    const result = await Login(email, password)
    if (result.success) {
      navigate("/admin")
    }
    else {
      console.log(result.error.message);

    }
    setEmail("")
    setPassword("")
  }

  return (
    <div className="max-w-md mx-auto bg-black/40 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-purple-700/30">
      <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
      <div className="space-y-5">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-purple-950/50 border border-purple-700/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-purple-950/50 border border-purple-700/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 py-3 rounded-xl font-semibold shadow-lg transition"
        >
          Login
        </button>
      </div>
      <p className="mt-6 text-center text-sm text-purple-300">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-pink-400 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
