import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Trainify",
  description: "Trainify – Train booking and management platform",
};

export default function MainLayout({ children }) {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="min-h-screen bg-slate-50">{children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
