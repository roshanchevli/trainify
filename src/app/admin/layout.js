import AdminSidebar from "@/components/admin/adminSidebar";

export const metadata = {
  title: "Trainify",
  description: "Trainify - Train booking and management platform",
};

export default function MainLayout({ children }) {
  return (
    <>
      <main className="min-h-screen bg-gray-100 flex">
        <AdminSidebar />
        {children}
      </main>
    </>
  );
}
