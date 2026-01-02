export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6 text-2xl font-bold text-blue-600">Admin Panel</div>

      <nav className="mt-6">
        <a className="block px-6 py-3 text-gray-700 hover:bg-blue-50">
          Dashboard
        </a>
        <a className="block px-6 py-3 text-gray-700 hover:bg-blue-50">Users</a>
        <a className="block px-6 py-3 text-gray-700 hover:bg-blue-50">
          Settings
        </a>
      </nav>
    </aside>
  );
}
