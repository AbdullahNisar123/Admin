import { auth, signOut } from "../Config/Firebase";

export default function AdminPage() {
  const handleLogOut = () => {
    signOut(auth).then(() => {
      console.log('====================================');
      console.log("Logout successfully");
      console.log('====================================');
    }).catch((error) => {
      // An error happened.
      console.log(error);

    });

  }
  return (
    <div className="text-center space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        {/* Logout Button */}
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
    </div>
  );
}
