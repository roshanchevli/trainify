"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path
      ? "text-indigo-600 font-semibold"
      : "text-gray-700 hover:text-indigo-600";

  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Trainify
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li>
            <Link href="/" className={isActive("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/trainers" className={isActive("/trainers")}>
              Trainers
            </Link>
          </li>
          <li>
            <Link href="/programs" className={isActive("/programs")}>
              Programs
            </Link>
          </li>
          <li>
            <Link href="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Auth Section */}
        {status === "loading" ? (
          <div className="w-32 h-8 bg-gray-200 rounded animate-pulse" />
        ) : session?.user ? (
          <div className="flex items-center gap-4">
            <span className="text-xl font-bold text-gray-700">
              {session.user.name}
            </span>
            <button
              onClick={() => signOut()}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link href="/signin" className={isActive("/signin")}>
              Login
            </Link>
            <Link
              href="/signup"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
