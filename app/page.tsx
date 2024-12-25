import dynamic from "next/dynamic";
import Hero from "./components/hero/Hero";
import Socials from "./components/Socials";
import About from "./components/About";
import Experience from "./components/experiences/Experiences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Skills = dynamic(() => import("./components/skills/Skills"));
const Project = dynamic(() => import("./components/projects/Projects"));
const Testimonials = dynamic(
  () => import("./components/testimonials/Testimonials")
);

const Home = async () => {
  return (
    <>
      <Hero />
      <Socials />
      <About />
      <Skills />
      <Project />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
