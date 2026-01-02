export default function UserRow({ name, email, role }) {
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
        <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
          Active
        </span>
      </td>
    </tr>
  );
}
