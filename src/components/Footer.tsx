import { Github, Linkedin, GraduationCap } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container-custom">

        <div className="flex flex-col gap-4">

           

          {/* Left-aligned tech credit */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground/70">
            <span>Built with</span>

             {/* Next.js Icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-70">
            <path fill="currentColor" d="M12 0C5.371 0 0 5.371 0 12s5.371 12 12 12c2.033 0 3.953-.508 5.626-1.399L7.826 7.826v8.348h1.348V9.174l9.097 9.097A11.93 11.93 0 0 0 24 12c0-6.629-5.371-12-12-12Z"/>
          </svg>

          {/* React Icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" className="opacity-70">
            <path fill="currentColor" d="M12 10.2a1.8 1.8 0 1 0 0 3.6a1.8 1.8 0 0 0 0-3.6Zm0-2.7c1.6 0 3.1.2 4.3.5c1.2.3 2 .8 2.5 1.4c.5.6.5 1.3 0 1.9c-.5.6-1.3 1.1-2.5 1.4c-1.2.3-2.7.5-4.3.5s-3.1-.2-4.3-.5c-1.2-.3-2-.8-2.5-1.4c-.5-.6-.5-1.3 0-1.9c.5-.6 1.3-1.1 2.5-1.4c1.2-.3 2.7-.5 4.3-.5Zm0-2.7c-1.3 0-2.6 1.5-3.6 4c1 .4 2.2.6 3.6.6s2.6-.2 3.6-.6c-1-2.5-2.3-4-3.6-4Zm0 12.6c1.3 0 2.6-1.5 3.6-4c-1-.4-2.2-.6-3.6-.6s-2.6.2-3.6.6c1 2.5 2.3 4 3.6 4Z"/>
          </svg>

          {/* Tailwind Icon */}
          <svg width="18" height="18" viewBox="0 0 48 48" className="opacity-70">
            <path fill="currentColor" d="M24 9C17.333 9 13.333 12.333 12 19c2.667-3.333 5.333-4.667 8-4c1.865.466 3.198 1.787 4 4c1 3 3 4.667 6 5c4 0 6.667-2 8-6c-2.667 3.333-5.333 4.667-8 4c-1.865-.466-3.198-1.787-4-4c-1-3-3-4.667-6-5Z"/>
          </svg>
        </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {currentYear} KaustubhRK. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};
