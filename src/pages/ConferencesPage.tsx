import { Navbar } from "@/components/Navbar";
import { Conferences } from "@/components/Conferences";
import { Footer } from "@/components/Footer";

const ConferencesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Conferences />
      </main>

      <Footer />
    </div>
  );
};

export default ConferencesPage;
