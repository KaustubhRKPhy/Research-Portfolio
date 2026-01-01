import { Navbar } from "@/components/Navbar";
import { Certificates } from "@/components/Certificates";
import { Footer } from "@/components/Footer";

const CertificatesPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Certificates />
      </main>

      <Footer />
    </div>
  );
};

export default CertificatesPage;
