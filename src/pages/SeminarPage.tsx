import { Navbar } from "@/components/Navbar";
import { Seminar } from "@/components/Seminar";
import { Footer } from "@/components/Footer";

const SeminarPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Seminar />
      </main>
      <Footer />
    </div>
  );
};

export default SeminarPage;