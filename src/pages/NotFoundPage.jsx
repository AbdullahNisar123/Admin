import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-xl text-purple-200">Oops! The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 rounded-xl font-semibold shadow-lg transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
