import { motion } from "framer-motion";
import { Calendar, MapPin, Award, Building2 } from "lucide-react";

const conferences = [
  {
    name: "International Webinar on Quantum Computing for the Next Generation: Exploring Opportunities",
    date: "February 16, 2025",
    year: "2025",
    role: "Participant",
    location: "Virtual",
    organiser: "Department of Physics, Willingdon College, Sangli (MH), India",
  },
  {
    name: "International Webinar on Nanotechnology: A Path Forward To Address Global Challenges",
    date: "October 24, 2024",
    year: "2024",
    role: "Participant",
    location: "Virtual",
    organiser: "Department of Physics & IQAC, Balwant College, Vita (MH), India",
  },
  {
    name: "One Day Seminar on Material Science & Applications (MCA-2023)",
    date: "December 23, 2023",
    year: "2023",
    role: "Attendee",
    location: "Virtual",
    organiser: "Sanjay Ghodawat Institute, Kolhapur (MH), India",
  },
  {
    name: "National Conference on Physics of Materials & Materials-based Device Fabrication (NCPM-MDF-2023)",
    date: "November 25–26, 2023",
    year: "2023",
    role: "Participant",
    location: "Kolhapur, India (On-site)",
    organiser: "Department of Physics, Shivaji University, Kolhapur (MH), India",
  },
  {
    name: "One Day National Webinar on Nano Materials for Healthcare, Energy, and Environment",
    year: "2023",
    role: "Participant",
    location: "Virtual",
    organiser:
      "Department of Physics, Athalye-Sapre-Pitre College (Autonomous), Devrukh, Ratnagiri (MH), India",
  },
  {
    name: "IP Awareness/Training Program under National Intellectual Property Awareness Mission (NIPAM)",
    date: "February 06, 2022",
    year: "2022",
    role: "Participant",
    location: "India (On-site)",
    organiser: "Intellectual Property Office, India",
  },
  {
    name: "2nd Asian e-Conference on Engineered Science",
    date: "December 05–06, 2021",
    year: "2021",
    role: "Participant",
    location: "Virtual",
    organiser:
      "Prof. C. D. Lokhande Endowment Charitable Trust & Engineered Science Publisher",
  },
];

// Sort newest → oldest
const sortedConferences = [...conferences].sort(
  (a, b) => Number(b.year) - Number(a.year)
);

export const Conferences = () => {
  return (
    <section id="conferences" className="py-20 bg-card/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">
            Conference, Workshops & Webinars Attended
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {sortedConferences.map((conf, index) => (
            <ConferenceCard key={index} conf={conf} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual conference card
const ConferenceCard = ({ conf }: { conf: (typeof conferences)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="relative group bg-card p-6 rounded-lg border border-border 
               shadow transition-all duration-300
               hover:border-accent hover:shadow-[0_0_20px_hsl(var(--accent))] 
               hover:-translate-y-1"
  >
    <div className="flex items-start gap-3 mb-4">
      <div className="p-2 bg-accent/10 rounded-lg transition-colors group-hover:bg-accent/20 group-hover:scale-105">
        <Calendar className="text-accent" size={20} />
      </div>

      <div className="flex-1">
        <h3 className="text-lg font-bold text-foreground mb-1 leading-tight">
          {conf.name}
        </h3>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {conf.date && <span className="font-medium">{conf.date}</span>}
          <span className="flex items-center gap-1">
            <MapPin size={14} className="text-accent" />
            {conf.location}
          </span>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-2 mt-2">
      <Award className="text-accent" size={16} />
      <span className="text-sm text-accent font-medium">{conf.role}</span>
    </div>

    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
      <Building2 className="text-accent" size={16} />
      <span>{conf.organiser}</span>
    </div>
  </motion.div>
);
