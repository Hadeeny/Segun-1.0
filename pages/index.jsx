import Head from "next/head";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { WorkExperience } from "../components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[#121212] text-[#e7ffe8] h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Hadeeny's</title>
        <meta name="description" content="Oluwasegun's portfolio v1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>
    </div>
  );
}
