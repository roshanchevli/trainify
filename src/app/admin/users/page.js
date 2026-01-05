"use client";

import { Plus } from "lucide-react";
// import UserRow from "@/components/admin/UserRow";
import { useEffect, useState } from "react";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex-1 flex flex-col mt-6">
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            User Management
          </h1>
        </div>

        {/* Users Table */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6 border-b font-semibold text-gray-700 text-lg">
            All Users
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Joined</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {/* {loading ? (
                <tr>
                  <td colSpan="4" className="p-4 text-center text-gray-700">
                    Loading...
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  // <UserRow
                  //   key={user._id}
                  //   name={user.name}
                  //   email={user.email}
                  //   role={user.role}
                  //   createdAt={user.createdAt}
                  // />
                ))
              )} */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
