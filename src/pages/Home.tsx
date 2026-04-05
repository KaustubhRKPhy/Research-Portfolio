import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Education />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
