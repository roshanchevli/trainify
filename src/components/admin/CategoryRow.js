import { Edit, Trash } from "lucide-react";

export default function CategoryRow({ name, slug, description, createdAt }) {
  return (
    <tr className="border-t hover:bg-gray-50 transition">
      {/* Category Name */}
      <td className="p-4 font-medium text-gray-800">{name}</td>

      {/* Slug */}
      <td className="p-4 text-gray-500">{slug}</td>

      {/* Description */}
      <td className="p-4 text-gray-600 max-w-xs truncate">
        {description || "—"}
      </td>

      {/* Created At */}
      <td className="p-4 text-gray-500 text-sm">
        {new Date(createdAt).toLocaleDateString()}
      </td>

      {/* Actions */}
      <td className="p-4 text-right space-x-2">
        <button className="inline-flex items-center gap-1 px-3 py-1 border rounded-md text-sm  text-indigo-600  hover:bg-indigo-600 hover:text-white transition">
          <Edit size={14} />
          Edit
        </button>

        <button className="inline-flex items-center gap-1 px-3 py-1 border rounded-md text-sm text-red-600 hover:bg-red-600 hover:text-white  transition">
          <Trash size={14} />
          Delete
        </button>
      </td>
    </tr>
  );
}
