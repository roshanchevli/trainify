import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Trainify",
  description: "Trainify – Train booking and management platform",
};

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen text-gray-800 bg-slate-50">{children}</main>
      <Footer />
    </>
  );
}
