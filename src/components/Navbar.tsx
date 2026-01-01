import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/#home", isHash: true },
  { name: "Conference", href: "/conferences", isHash: false },
  { name: "Certificates", href: "/certificates", isHash: false },
  { name: "Seminar", href: "/seminar", isHash: false },
  { name: "Contact", href: "/#contact", isHash: true },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Dark mode with persistence
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("dark-mode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("dark-mode", JSON.stringify(dark));
  }, [dark]);

  const renderNavItem = (item: typeof navItems[number]) => {
    if (item.isHash) {
      return (
        <a
          href={item.href}
          onClick={() => setIsOpen(false)}
          className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-all duration-300 hover:text-foreground hover:bg-muted/50 hover:ring-2 hover:ring-accent hover:ring-offset-1"
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link
        to={item.href}
        onClick={() => setIsOpen(false)}
        className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-all duration-300 hover:text-foreground hover:bg-muted/50 hover:ring-2 hover:ring-accent hover:ring-offset-1"
      >
        {item.name}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(var(--background)/98%)] backdrop-blur-md border-b border-border shadow-sm">
      <div className="relative container-custom flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/#home"
          className="flex items-center gap-2 text-base sm:text-lg font-bold tracking-tight whitespace-nowrap"
        >
          <img
            src={dark ? "/favicon.ico" : "/favicon-3.ico"}
            alt="Kaustubh RK Logo"
            className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
          />
          <span>
            <span className="text-[hsl(var(--foreground))]">Kaustubh</span>
            <span className="text-accent">RK</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-5">
          {navItems.map((item) => (
            <div key={item.name}>{renderNavItem(item)}</div>
          ))}
        </div>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 hover:shadow-[0_0_10px_hsl(var(--accent))] transition-all duration-300"
            aria-label="Toggle Dark/Light Mode"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 hover:shadow-[0_0_10px_hsl(var(--accent))] transition-all duration-300"
            aria-label="Toggle Dark/Light Mode"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[hsl(var(--foreground))] hover:text-accent transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="relative md:hidden">
        <div
          className={`absolute right-1 bg-[hsl(var(--background)/98%)] backdrop-blur-md border border-border rounded-md overflow-hidden transition-all duration-300 ${
            isOpen ? "opacity-100 max-h-[500px] py-2" : "opacity-0 max-h-0 py-0"
          }`}
          style={{ width: "max-content" }}
        >
          <div className="flex flex-col px-4">
            {navItems.map((item) => (
              <div key={item.name}>{renderNavItem(item)}</div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
