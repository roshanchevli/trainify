"use client";

import { Plus, Edit, Trash } from "lucide-react";
import CategoryRow from "@/components/admin/CategoryRow";
import AddCategoryDialog from "@/components/admin/AddCategory";
import { useEffect, useState } from "react";

export default function AdminCategoryPage() {
  const [openDialog, setOpenDialog] = useState(false);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/api/admin/getcategories");
      const data = await res.json();
      setCategories(data.categories);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex-1 flex flex-col mt-6">
      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">
            Trainer Categories
          </h1>

          <button
            onClick={() => setOpenDialog(true)}
            className="flex items-center gap-2  bg-gray-100 text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-600 hover:text-white transition"
          >
            <Plus size={18} />
            Add Category
          </button>
          <AddCategoryDialog
            open={openDialog}
            onClose={() => setOpenDialog(false)}
            onSuccess={fetchCategories}
          />
        </div>

        {/* Category Table */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6 border-b font-semibold text-gray-700 text-lg">
            All Categories
          </div>

          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="p-4">Category Name</th>
                <th className="p-4">Slug</th>
                <th className="p-4">Description</th>
                <th className="p-4">Created at</th>
                <th className="p-4">Action</th>
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
                categories.map((cat) => (
                  <CategoryRow
                    key={cat._id}
                    name={cat.name}
                    slug={cat.slug}
                    description={cat.description}
                    createdAt={cat.createdAt}
                  />
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
