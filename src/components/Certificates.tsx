import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    name: "IBM Data Science Professional",
    issuer: "Coursera - IBM",
    date: "Jul 2025",
    logo: "/logos/ibm.png",
    link: "https://coursera.org/share/21a0fe746e77c3873f1992bf8f7011fe",
  },
  {
    name: "IBM Data Analytics Professional",
    issuer: "Coursera - IBM",
    date: "Jul 2025",
    logo: "/logos/ibm.png",
    link: "https://coursera.org/share/eac2ed9c5e97aa77d152cc0399c15213",
  },
  {
    name: "IELTS (Band 7.5)",
    issuer: "IELTS Official",
    date: "Sep 2024",
    logo: "/logos/ielts.png",
    link: "https://drive.google.com/file/d/1QGs48osNLBQp4rKye6xB3jshZmToo0wA/view?usp=sharing",
  },
  {
    name: "Electricity & Safety Measurements",
    issuer: "NPTEL - IGNOU, New Delhi",
    date: "May 26, 2022",
    logo: "/logos/nptel.png",
    link: "https://drive.google.com/file/d/1B_Hb-sTjf8LeuiUrjoSrsR6-rSWRNWQG/view?usp=sharing",
  },
  {
    name: "Introduction to Thermodynamics",
    issuer: "Coursera - University of Michigan, Michigan",
    date: "Sept 19, 2021",
    logo: "/logos/michigan.png",
    link: "https://coursera.org/share/14d0937ca9641a3af4914ea4ee5ce520",
  },
  {
    name: "Understanding Einstein: The Special Theory of Relativity",
    issuer: "Coursera - Stanford University, California",
    date: "Apr 17, 2021",
    logo: "/logos/stanford.png",
    link: "https://coursera.org/share/743af28ed4e1ce468c6ba8f8a00e7c8d",
  },
];

export const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 bg-card/30 text-card-foreground"
    >
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Certifications</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert) => (
            <CertificateCard key={cert.name} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual certificate card
const CertificateCard = ({ cert }: { cert: (typeof certificates)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="group bg-card p-6 rounded-lg border border-border 
               shadow transition-all duration-300
               hover:border-accent hover:shadow-[0_0_20px_hsl(var(--accent))] 
               hover:-translate-y-1"
  >
    <div className="flex items-center gap-4 mb-3">
      {cert.logo ? (
        <img
          src={cert.logo}
          alt={cert.issuer}
          className="w-12 h-12 rounded-lg object-contain"
        />
      ) : (
        <Award className="w-10 h-10 text-accent" />
      )}

      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground">{cert.name}</h3>
        <p className="text-sm text-accent font-medium">{cert.issuer}</p>
      </div>
    </div>

    <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>

    <Button
      variant="outline"
      size="sm"
      className="border-accent text-accent hover:bg-accent hover:text-white"
      asChild
    >
      <a href={cert.link} target="_blank" rel="noopener noreferrer">
        View Certificate
        <ExternalLink className="ml-2 h-3 w-3" />
      </a>
    </Button>
  </motion.div>
);
