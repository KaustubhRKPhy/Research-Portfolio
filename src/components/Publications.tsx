import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title:
      "Predictive Modelling and Optimization of CIGS Thin Film Solar Cells: A Machine Learning Approach",
    authors: (
      <>
        <strong>K. R. Kumbhar</strong>, R. S. Redekar, N. L. Tarwal*, et al.
      </>
    ),
    journal: "Solar Energy",
    impactFactor: "6.0",
    year: "July 2025",
    link: "https://doi.org/10.1016/j.solener.2025.113509",
  },
  {
    title:
      "Investigating the effect of the electrolyte variation on the supercapacitor performance of hydrothermally synthesized MnCo LDH films",
    authors: (
      <>
        <strong>K. R. Kumbhar</strong>, R. S. Redekar, N. L. Tarwal*
      </>
    ),
    journal: "Journal of Energy Storage",
    impactFactor: "9.8",
    year: "February 2026",
    link: "https://doi.org/10.1016/j.est.2025.119854",
  },
  {
    title: "Emerging Trends in Ozone Gas Monitoring: A Brief Overview",
    authors: (
      <>
        R. S. Redekar, <strong>K. R. Kumbhar</strong>, N. L. Tarwal*
      </>
    ),
    journal: "Elsevier",
    impactFactor: "",
    year: "January 2026",
    link: "",
  },
  {
    title:
      "Emerging Functionalities and Machine Learning Integration in Next Gen Supercapacitors",
    authors: (
      <>
        <strong>K. R. Kumbhar</strong>, D. S. Dhawale*
      </>
    ),
    journal: "Under Submission",
    impactFactor: "",
    year: "March 2026",
    link: "",
  },
];

// helper to convert "Month YYYY" → Date
const parseMonthYear = (value: string) => {
  return new Date(`${value} 01`);
};

// sorted copy (latest first)
const sortedProjects = [...projects].sort(
  (a, b) =>
    parseMonthYear(b.year).getTime() -
    parseMonthYear(a.year).getTime()
);

const VISIBLE_COUNT = 4;

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const hiddenRef = useRef<HTMLDivElement>(null);

  const toggleShowAll = () => setShowAll((prev) => !prev);
  const scrollToTop = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-card/30">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="gradient-text">Publications</span>
        </h2>

        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          {/* Always visible projects */}
          {sortedProjects.slice(0, VISIBLE_COUNT).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}

          {/* Hidden projects */}
          <AnimatePresence onExitComplete={() => !showAll && scrollToTop()}>
            {showAll && (
              <motion.div
                ref={hiddenRef}
                className="flex flex-col gap-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onAnimationComplete={() =>
                  hiddenRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              >
                {sortedProjects.slice(VISIBLE_COUNT).map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less */}
        {sortedProjects.length > VISIBLE_COUNT && (
          <div className="flex justify-center mt-8">
            <button
              onClick={toggleShowAll}
              className="px-6 py-2 text-sm font-medium rounded-full border border-accent 
                         text-accent bg-transparent hover:bg-accent hover:text-white 
                         transition-colors flex items-center gap-2"
            >
              {showAll ? "Show Less" : "Show More"}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.35, ease: "easeOut" }}
    className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card px-5 py-5 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-accent/50 hover:shadow-[0_0_20px_hsl(var(--accent))]"
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div className="min-w-0 flex-1">
        <div className="flex items-start gap-3">
          <div className="relative mt-0.5">
            <div className="pointer-events-none absolute inset-0 rounded-lg bg-accent/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:bg-accent/20">
              <FileText className="h-4 w-4" />
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-semibold leading-7 text-foreground transition-colors duration-300 group-hover:text-accent md:text-lg">
              {project.title}
            </h3>
            {/* <div className="mt-2 h-0.5 w-8 rounded-full bg-accent/30 transition-all duration-500 group-hover:w-16 group-hover:bg-accent" /> */}
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <p className="text-sm font-medium text-accent">
                {project.journal}
              </p>
              {project.impactFactor ? (
                <span className="inline-flex items-center rounded-full border border-border bg-secondary/10 px-2 py-0.5 text-[11px] font-semibold tracking-[0.08em] text-[hsl(var(--secondary-400))] dark:text-[hsl(var(--secondary-200))]">
                  IF {project.impactFactor}
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {project.authors}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-between gap-5 md:min-h-[110px] md:w-40 md:items-end">
        <span className="self-start px-1 text-xs font-medium tracking-[0.08em] text-muted-foreground md:self-end">
          {project.year}
        </span>
        <div className="mt-auto flex justify-start md:justify-end">
          {project.link ? (
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-border bg-transparent text-accent transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_10px_hsl(var(--accent))]"
              asChild
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Publication
                <ExternalLink className="ml-2 h-3.5 w-3.5" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  </motion.div>
);
