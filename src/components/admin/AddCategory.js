import { X } from "lucide-react";
import { useState } from "react";

export default function AddCategoryDialog({ open, onClose, onSuccess }) {
  const [category, setCategory] = useState({
    name: "",
    slug: "",
    description: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/admin/addcategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      onSuccess();
      onClose();

      setCategory({ name: "", slug: "", description: "" });
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Add New Category
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 cursor-pointer hover:text-gray-800"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="px-6 py-4 space-y-4">
          {/* Name */}
          <div>
            <label className="block cursor-pointer text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              name="name"
              value={category.name}
              onChange={handleChange}
              placeholder="Fitness & Gym Training"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Slug
            </label>
            <input
              type="text"
              name="slug"
              value={category.slug}
              onChange={handleChange}
              placeholder="Fitness-Gym-Training"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              rows={3}
              name="description"
              value={category.description}
              onChange={handleChange}
              placeholder="Short description about this category"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          {error && (
            <div className="bg-red-50 text-red-600 text-sm px-3 py-2 rounded-lg">
              {error}
            </div>
          )}

          {/* Footer */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 cursor-pointer rounded-lg border text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg cursor-pointer bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
