export default function UserRow({ name, email, role, createdAt }) {
  return (
    <tr className="border-t">
      <td className="p-4 text-gray-700">{name}</td>
      <td className="p-4 text-gray-700">{email}</td>
      <td className="p-4">
        <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
          {role}
        </span>
      </td>
      <td className="p-4">
        <span className="px-3 py-1 rounded-full text-sm bg-gray-500 text-white">
          {createdAt || "—"}
        </span>
      </td>
    </tr>
  );
}
