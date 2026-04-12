import { ArrowRight, Github, GraduationCap, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import RotatingText from "./RotatingText";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col overflow-hidden pt-16"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[hsl(var(--background))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_left,_hsla(var(--accent),0.18),_transparent_45%),radial-gradient(circle_at_85%_25%,_hsla(var(--accent),0.12),_transparent_30%)]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container-custom relative z-10 flex flex-1 flex-col justify-center py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_18rem] lg:items-stretch lg:gap-16 xl:grid-cols-[minmax(0,1.5fr)_20rem] xl:gap-20">

          {/* ── LEFT ── */}
          <div className="flex flex-col">

            <div className="mb-6 flex items-center gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Scientific Portfolio
              </p>
            </div>

            <h1 className="hero-headline max-w-4xl text-5xl font-bold leading-[0.95] tracking-[-0.03em] text-[hsl(var(--foreground))] sm:text-7xl xl:text-8xl">
              Kaustubh R. Kumbhar
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-2 text-xl sm:text-2xl text-[hsl(var(--muted-foreground))]">
              <span className="text-accent font-medium">Researcher in</span>
              <RotatingText
                texts={["Physics", "Materials Science", "Machine Learning"]}
                mainClassName="inline-flex items-center text-[hsl(var(--foreground))] font-semibold tracking-[-0.02em]"
                splitLevelClassName="overflow-hidden"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                transition={{ type: "tween", duration: 0.5 }}
                rotationInterval={2000}
              />
            </div>

            <p className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 text-base text-[hsl(var(--muted-foreground))]">
              <span className="font-semibold text-lg text-[hsl(var(--foreground))]">PhD Candidate at QUT, Brisbane (AU)</span>
              <span className="select-none text-[hsl(var(--muted-foreground)/0.4)]">|</span>
              <span className="text-base">Former Data Scientist & ML Engineer</span>
            </p>

            <p className="mt-5 max-w-[46rem] text-base leading-8 text-[hsl(var(--muted-foreground))] sm:text-base">
              Centre for Materials Science and School of Chemistry and Physics,
              Queensland University of Technology, Brisbane, QLD 4001, Australia
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-[hsl(var(--accent-foreground))] shadow-[0_12px_30px_hsla(var(--accent),0.28)] transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Explore Research
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-[hsl(var(--foreground))] backdrop-blur-sm transition-colors duration-300 hover:border-accent/40 hover:bg-accent/5"
              >
                Collaborate
              </a>
            </div>
          </div>

          {/* ── RIGHT: Photo Card */}
          <div className="mx-auto flex w-full max-w-[16.5rem] flex-col self-stretch sm:max-w-[18rem] lg:mx-0 lg:max-w-none">
            <div className="relative flex flex-col h-full">
              <div className="absolute inset-8 rounded-3xl bg-accent/20 blur-3xl pointer-events-none" />
              <div className="relative flex flex-col h-full w-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[hsl(var(--card))] lg:flex-1 lg:min-h-0">
                  <img
                    src="/profile.png"
                    alt="Kaustubh Kumbhar"
                    className="aspect-[4/5] w-full object-cover object-[center_15%] lg:h-full lg:aspect-auto"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="mt-4 flex items-center justify-around">
                  <a
                    href="https://scholar.google.com/citations?user=x6pyy7UAAAAJ&hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 text-[hsl(var(--muted-foreground))] transition-colors hover:text-accent"
                  >
                    <GraduationCap className="h-5 w-5" />
                    <span className="text-[11px] font-medium">Scholar</span>
                  </a>
                  <div className="h-6 w-px bg-white/10" />
                  <a
                    href="https://www.linkedin.com/in/kaustubh-kumbhar-4b841b293/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 text-[hsl(var(--muted-foreground))] transition-colors hover:text-accent"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-[11px] font-medium">LinkedIn</span>
                  </a>
                  <div className="h-6 w-px bg-white/10" />
                  <a
                    href="https://github.com/KaustubhRKPhy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 text-[hsl(var(--muted-foreground))] transition-colors hover:text-accent"
                  >
                    <Github className="h-5 w-5" />
                    <span className="text-[11px] font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
