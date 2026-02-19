import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Skills from "@/components/portfolio/Skills";
// import CaseStudies from "@/components/portfolio/CaseStudies";
// import Writing from "@/components/portfolio/Writing";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <CaseStudies /> */}
        {/* <Writing /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
