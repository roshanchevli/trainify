"use client";

import { Users, UserCheck, Shield, LogOut } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 text-2xl font-bold text-blue-600">
          Admin Panel
        </div>

        <nav className="mt-6">
          <a className="block px-6 py-3 text-gray-700 hover:bg-blue-50">
            Dashboard
          </a>
          <a className="block px-6 py-3 text-gray-700 hover:bg-blue-50">
            Users
          </a>
          <a className="block px-6 py-3 text-gray-700 hover:bg-blue-50">
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Dashboard
          </h1>

          <button className="flex items-center gap-2 text-red-600 hover:text-red-700">
            <LogOut size={20} />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <StatCard
            icon={<Users size={28} />}
            title="Total Users"
            value="1,245"
          />

          <StatCard
            icon={<UserCheck size={28} />}
            title="Active Users"
            value="1,080"
          />

          <StatCard
            icon={<Shield size={28} />}
            title="Admins"
            value="3"
          />
        </div>

        {/* Recent Users Table */}
        <div className="mt-10 bg-white shadow rounded-lg">
          <div className="p-6 border-b font-semibold text-lg">
            Recent Users
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <UserRow name="Rahul Sharma" email="rahul@gmail.com" role="Client" />
              <UserRow name="Admin User" email="admin@gmail.com" role="Admin" />
              <UserRow name="Neha Patel" email="neha@gmail.com" role="Client" />
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

/* Components */

function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
      <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
    </div>
  );
}

function UserRow({ name, email, role }) {
  return (
    <tr className="border-t">
      <td className="p-4">{name}</td>
      <td className="p-4">{email}</td>
      <td className="p-4">
        <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
          {role}
        </span>
      </td>
      <td className="p-4">
        <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
          Active
        </span>
      </td>
    </tr>
  );
}
