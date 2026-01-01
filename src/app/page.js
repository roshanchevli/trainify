import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main landing page of the application.</p>
      </main>
      <Footer />
    </>
  );
}
