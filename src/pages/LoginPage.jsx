import { auth, signInWithEmailAndPassword } from "../Config/Firebase";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Login succesfully with :", email);
        window.location.href = "admin"

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

      });
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
        <a href="/signup" className="text-pink-400 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
