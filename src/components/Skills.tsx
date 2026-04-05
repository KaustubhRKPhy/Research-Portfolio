import { Code2, FlaskConical, Wrench, Microscope } from "lucide-react";

const skillCategories = [
  {
    title: "Fabrication Skills",
    icon: FlaskConical,
    skills: [
      "Thin Film Material Fabrication",
      "Hydrothermal (Autoclave)",
      "Chemical Bath Deposition (CBD)",
      "Doctor's Blade",
      "Experimental Physics",
      "Successive Ionic Layer Adsorption and Reaction (SILAR)",
    ],
  },
  {
    title: "Characterization Skills",
    icon: Microscope,
    skills: [
      "Material Characterization",
      "Fourier Transform Infrared Spectroscopy (FT-IR)",
      "X-ray diffraction (XRD)",
      "Field Emission Scanning Electron Microscope (FE-SEM)",
      "Energy Dispersive X-Ray Analysis (EDAX)",
      "Cyclic Voltammetry (CV)",
      "Galvanostatic Charge–Discharge (GCD)",
      "Electrochemical Impedance Spectroscopy (EIS)",
    ],
  },
  {
    title: "Technical Skills",
    icon: Code2,
    skills: [
      "Python",
      "Machine Learning",
      "MATLAB",
      "SQL",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Sci-kit learn",
      "Plotly",
      "Git",
      "Jupyter",
      "Docker",
      "Data Analysis",
    ],
  },
  {
    title: "Tools & Software",
    icon: Wrench,
    skills: [
      "EndNote",
      "NOVA 2.1",
      "Adobe Illustrator",
      "MS Office",
      "VS Code",
      "X'Pert High Score Plus",
      "ZWimp",
      "Google Collaboratory",
      "OriginPro",
      "ImageJ",
      "Power BI",
      "Tableau",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="pt-20 pb-16 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="flex max-w-6xl flex-col gap-6 mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-2xl border-2 border-border 
                           overflow-hidden transition-all duration-500 ease-out
                           hover:border-accent/50 hover:shadow-[0_0_20px_hsl(var(--accent))] hover:-translate-y-1"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative p-6">
                  {/* Header with icon */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 rounded-lg blur-xl 
                                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative p-1.5 bg-accent/10 rounded-lg 
                                      transition-all duration-500
                                      group-hover:bg-accent/20 group-hover:scale-110 group-hover:rotate-6">
                        <Icon className="text-accent" size={16} strokeWidth={2} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground
                                     group-hover:text-accent transition-colors duration-300">
                        {category.title}
                      </h3>
                      <div className="h-0.5 w-8 bg-accent/30 rounded-full 
                                      transition-all duration-500
                                      group-hover:w-16 group-hover:bg-accent" />
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                       className="px-3 py-1.5 text-xs font-medium rounded-full
                        bg-background text-foreground border-2 border-border
                        transition-all duration-300 cursor-default
                        hover:border-accent hover:bg-accent/10 hover:text-accent hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="h-1 w-0 bg-gradient-to-r from-accent to-accent/50 
                                transition-all duration-700 ease-out
                                group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
