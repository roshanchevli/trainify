import { Check, X } from "lucide-react";
import { useState } from "react";

export default function TrainerRow({
  name,
  email,
  isApproved,
  onDelete,
  id,
  fetchUsers,
}) {
  const [error, setError] = useState("");

  const handleApprove = async (id) => {
    try {
      const res = await fetch(`/api/admin/trainer/${id}/approve`, {
        method: "PATCH",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to approve trainer");
      }
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };
  const handleReject = async (id) => {
    try {
      const res = await fetch(`/api/admin/trainer/${id}/reject`, {
        method: "PATCH",
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to reject trainer");
      }
      fetchUsers();
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <tr className="border-t">
        <td className="p-4 text-gray-700">{name}</td>
        <td className="p-4 text-gray-700">{email}</td>

        {/* Status */}
        <td className="p-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
              isApproved ? "bg-green-500" : "bg-yellow-500"
            }`}
          >
            {isApproved ? "Approved" : "Pending"}
          </span>
        </td>

        {/* Actions */}
        <td className="p-4">
          {!isApproved && (
            <div className="flex gap-3">
              <button
                onClick={() => handleApprove(id)}
                className="flex items-center gap-2 p-1.5 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition text-sm"
              >
                <Check size={16} />
                Approve
              </button>
              <button
                onClick={() => handleReject(id)}
                className="flex items-center gap-2 p-1.5 text-red-600 border border-red-600 rounded-md hover:bg-red-600 hover:text-white transition text-sm"
              >
                <X size={16} />
                Reject
              </button>
            </div>
          )}
        </td>
      </tr>
      {error && (
        <div className="bg-red-50 text-red-600 text-sm px-3 py-2 rounded-lg">
          {error}
        </div>
      )}
    </>
  );
}
