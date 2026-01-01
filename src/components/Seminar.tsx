import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";

const seminars = [
  {
    title: "Recent Advances in Thin Film Solar Cell Technologies",
    pdf: "/seminars/solar-cell-seminar.pdf",
  },
  {
    title: "Machine Learning Applications in Energy Storage Devices",
    pdf: "/seminars/ml-energy-storage.pdf",
  },
  {
    title: "Nanostructured Materials for Next-Generation Supercapacitors",
    pdf: "/seminars/nanostructured-materials.pdf",
  },
];

export const Seminar = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container-custom max-w-5xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="gradient-text">Seminars</span>
        </motion.h2>

        {/* Seminar List */}
        <ol className="space-y-6">
          {seminars.map((seminar, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group flex items-start gap-4 p-5 rounded-lg 
                         border border-border bg-card 
                         hover:border-accent
                         hover:shadow-[0_0_20px_hsl(var(--accent))]
                         transition-all duration-300"
            >
              {/* Number */}
              <span
                className="text-xl font-bold text-accent min-w-[28px]"
              >
                {index + 1}.
              </span>

              {/* Content */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-3">
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {seminar.title}
                </h3>

                <a
                  href={seminar.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium 
                             text-accent border border-accent rounded-full px-4 py-1.5
                             hover:bg-accent hover:text-white
                             hover:shadow-[0_0_10px_hsl(var(--accent))]
                             transition-all duration-300 w-fit"
                >
                  <FileText className="w-4 h-4" />
                  View here
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};
