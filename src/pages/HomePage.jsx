export default function HomePage() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Welcome to MyApp
      </h1>
      <p className="text-lg text-purple-200 max-w-2xl mx-auto">
        This is the public homepage. Anyone can access this page without logging in.
        Explore features, sign up, and enjoy a smooth experience.
      </p>
      <div className="mt-8 flex justify-center gap-6">
        <a
          href="/signup"
          className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition shadow-lg"
        >
          Get Started
        </a>
        <a
          href="/login"
          className="px-6 py-3 border border-purple-500 hover:bg-purple-700 rounded-xl font-semibold transition shadow-lg"
        >
          Login
        </a>
      </div>
    </div>
  );
}
