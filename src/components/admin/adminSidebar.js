"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();
  const isActive = (path) => {
    return pathname === path
      ? "text-indigo-600 font-semibold bg-gray-100 border-l-4 border-indigo-600 pl-4"
      : "text-gray-700 hover:text-indigo-600";
  };
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6 text-2xl font-bold text-blue-600">Admin Panel</div>

      <nav className="mt-6">
        <Link href="/admin" className={`block px-6 py-3 ${isActive("/admin")}`}>
          Dashboard
        </Link>
        <Link
          href="/admin/users"
          className={`block px-6 py-3 ${isActive("/admin/users")}`}
        >
          Users
        </Link>
        <Link
          href="/admin/trainers"
          className={`block px-6 py-3 ${isActive("/admin/trainers")}`}
        >
          Trainers
        </Link>
      </nav>
    </aside>
  );
}
