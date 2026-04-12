import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Ph.D.",
    cgpa: "",
    institution:
      "School of Chemistry & Physics, Queensland University of Technology (QS-#226), Brisbane, Queensland, Australia",
    period: "Feb 2026 – Present",
    description: ["Principal Supervisor: Dr. Mahboobeh Shahbazi Manshadi",
      "Research Area: Magnetocaloric Materials for Hydrogen Liquefaction",
      "Scholarship: QUT Postgraduate Research Award (QUTPRA)",
    ],
  },
  {
    degree: "M.Sc. Physics",
    cgpa: "8.63 / 10",
    institution:
      "Department of Physics, Shivaji University, Kolhapur (SUK)",
    period: "Sep 2022 – Mar 2024",
    description: [
      "Thesis: Machine Learning Assisted Modelling of CIGS TFSCs",
      "Advisor: Dr. N. L. Tarwal",
      "Lab: Smart Materials Laboratory, Dept. of Physics, SUK",
    ],
  },
  {
    degree: "B.Sc. Physics",
    cgpa: "9.79 / 10",
    institution:
      "PAHS University, Solapur",
    period: "Jun 2019 – Mar 2022",
    description: [
      "Projects: Automatic Street Light Control System and Clap Switch",
    ],
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-card/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Education</span>
        </h2>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-border/80 md:block" />
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group relative mb-4 last:mb-0 md:pl-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
            <div className="absolute left-0 top-6 z-10 hidden h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-background shadow-[0_0_0_5px_hsl(var(--background))] transition-all duration-500 group-hover:border-accent/50 md:flex">                <GraduationCap className="text-accent" size={18} strokeWidth={2} />
              </div>
              <div
                className="relative overflow-hidden rounded-2xl border-2 border-border bg-card p-5 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_0_20px_hsl(var(--accent))]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/6 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex items-start gap-3 md:hidden">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10">
                      <GraduationCap className="text-accent" size={18} strokeWidth={2} />
                    </div>
                    <div className="h-px flex-1 self-center bg-border/70" />
                  </div>

                  <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
                        {edu.degree}
                      </h3>
                      <div className="mt-1.5 h-0.5 w-10 rounded-full bg-accent/40 transition-all duration-500 group-hover:w-20 group-hover:bg-accent" />
                    </div>
                    <div className="flex items-center self-start rounded-full border-2 border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent transition-all duration-500 group-hover:border-accent/50">
                      {edu.period}
                    </div>
                  </div>
                  <div className="mb-4 space-y-2">
                    {edu.cgpa && (
                      <p className="text-sm font-semibold text-foreground">
                        CGPA: {edu.cgpa}
                      </p>
                    )}

                    <p className="whitespace-pre-line text-sm font-semibold leading-6 text-accent">
                      {edu.institution}
                    </p>
                  </div>

                  {edu.description.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1.5 marker:text-accent">
                      {edu.description.map((desc, i) => (
                        <li
                          key={i}
                          className="text-sm leading-6 text-muted-foreground" 
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
