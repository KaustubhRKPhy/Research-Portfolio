import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    reason: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      institution: formData.reason,
      message: formData.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", reason: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border-2 border-border bg-[linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)] px-6 py-8 sm:px-8 md:px-10 md:py-10 lg:px-14 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_hsla(var(--accent),0.08),_transparent_38%),radial-gradient(circle_at_85%_90%,_hsla(var(--secondary),0.08),_transparent_32%)] pointer-events-none" />

            <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
              <div className="flex flex-col">
                <div>
                  <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
                    Collaboration
                  </p>
                  <h2 className="hero-headline max-w-md text-5xl leading-[0.95] tracking-[-0.03em] text-foreground sm:text-6xl">
                    Get in touch                  
                  </h2>
                  <p className="mt-8 max-w-md text-base leading-8 text-muted-foreground">
                    Open for research inquiries, collaborative projects on ML in Material Science. Let's contribute to computational and experimental Physics together.
                  </p>
                </div>

                <div className="mt-8 space-y-5">
                  <div className="flex items-center gap-4 rounded-2xl border-2 border-border bg-background px-4 py-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        Email
                      </p>
                      <a
                        href="mailto:kaustubhrk.phy@gmail.com"
                        className="mt-1 block text-base text-foreground transition-colors"
                      >
                        kaustubhrk.phy@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border-2 border-border bg-background px-4 py-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                        Current Office
                      </p>
                      <p className="mt-1 text-base text-foreground">
                        Brisbane, Australia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
                      Name
                    </span>
                    <Input
                      placeholder=""
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 text-foreground shadow-none outline-none ring-0 transition-colors focus:border-0 focus:border-b focus:border-accent/60 focus:outline-none focus:ring-0 focus-visible:border-0 focus-visible:border-b focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
                      Institution
                    </span>
                    <Input
                      placeholder=""
                      value={formData.reason}
                      onChange={(e) =>
                        setFormData({ ...formData, reason: e.target.value })
                      }
                      required
                      className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 text-foreground shadow-none outline-none ring-0 transition-colors focus:border-0 focus:border-b focus:border-accent/60 focus:outline-none focus:ring-0 focus-visible:border-0 focus-visible:border-b focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
                    Email
                  </span>
                  <Input
                    type="email"
                    placeholder=""
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12 rounded-none border-0 border-b border-border bg-transparent px-0 text-foreground shadow-none outline-none ring-0 transition-colors focus:border-0 focus:border-b focus:border-accent/60 focus:outline-none focus:ring-0 focus-visible:border-0 focus-visible:border-b focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-[11px] font-medium uppercase tracking-[0.18em] text-[hsl(var(--muted-foreground))]">
                    Inquiry
                  </span>
                  <Textarea
                    placeholder=""
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="min-h-[7.5rem] rounded-none border-0 border-b border-border bg-transparent px-0 pb-3 text-foreground shadow-none outline-none ring-0 resize-none transition-colors focus:border-0 focus:border-b focus:border-accent/60 focus:outline-none focus:ring-0 focus-visible:border-0 focus-visible:border-b focus-visible:border-accent/60 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </label>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="mt-2 h-12 rounded-md bg-[linear-gradient(90deg,hsl(var(--accent-200))_0%,hsl(var(--secondary-200))_100%)] px-6 text-sm font-semibold uppercase tracking-[0.18em] text-black hover:opacity-95 dark:border-accent/30 dark:bg-[linear-gradient(90deg,hsl(var(--accent))_0%,hsl(var(--secondary))_100%)] dark:text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
