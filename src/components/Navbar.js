import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-indigo-600">
          Trainify
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li>
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/trainers" className="hover:text-indigo-600">
              Trainers
            </Link>
          </li>
          <li>
            <Link href="/programs" className="hover:text-indigo-600">
              Programs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-indigo-600">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/signin" className="text-gray-700 hover:text-indigo-600">
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
