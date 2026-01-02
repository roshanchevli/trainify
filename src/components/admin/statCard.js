export default function StatCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
      <div className="p-3 bg-blue-100 text-blue-600 rounded-full">{icon}</div>
      <div>
        <p className="text-gray-700 ">{title}</p>
        <h3 className="text-2xl font-bold text-gray-800">{value}</h3>
      </div>
    </div>
  );
}
