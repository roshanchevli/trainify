"use client";

import AdminSidebar from "@/components/admin/adminSidebar";
import StatCard from "@/components/admin/statCard";
import UserRow from "@/components/admin/userRow";
import { Users, UserCheck, Shield, LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/admin/user");
        const data = await res.json();
        setUsers(data.users); 
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>

          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-white hover:bg-red-600 hover:px-4 hover:py-2  border-red-600 rounded-lg transition"
          >
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

          <StatCard icon={<Shield size={28} />} title="Admins" value="3" />
        </div>

        {/* Recent Users Table */}
        <div className="mt-10 bg-white shadow rounded-lg">
          <div className="p-6 border-b font-semibold text-gray-700 text-lg">Recent Users</div>

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
              {loading ? (
                <tr>
                  <td colSpan="4" className="p-4 text-gray-700 text-center">
                    Loading...
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <UserRow
                    key={user._id}
                    name={user.name}
                    email={user.email}
                    role={user.role}
                  />
                ))
              )}

              {/* <UserRow
                name="Rahul Sharma"
                email="rahul@gmail.com"
                role="Client"
              />
              <UserRow name="Admin User" email="admin@gmail.com" role="Admin" />
              <UserRow name="Neha Patel" email="neha@gmail.com" role="Client" /> */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
