export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md text-center py-6 mt-12 border-t border-purple-800/40">
      <p className="text-sm text-purple-300">
        © {new Date().getFullYear()} MyApp — Built with ❤️
      </p>
    </footer>
  );
}
