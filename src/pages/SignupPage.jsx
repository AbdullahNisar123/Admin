import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function SignupPage() {

  const {SignUp}  = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const handleSignUp = async () => {

    if (!email || !password) {
      console.log("Enter All Values");
      return

    }
    const result = await SignUp(email, password)
    if (result.success) {
      navigate("/login")
    }
    else {
      console.log(result.error.message  )
    }
    setEmail("")
    setPassword("")

  }

  return (
    <div className="max-w-md mx-auto bg-black/40 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-purple-700/30">
      <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
      <div className="space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-purple-950/50 border border-purple-700/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-purple-950/50 border border-purple-700/40 focus:outline-none focus:ring-2 focus:ring-purple-500"
          onChange={(p) => setPassword(p.target.value)}
          value={password}
          required
        />
        <button
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 py-3 rounded-xl font-semibold shadow-lg transition"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </div>
      <p className="mt-6 text-center text-sm text-purple-300">
        Already have an account?{" "}
        <Link to="/login" className="text-pink-400 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
}
