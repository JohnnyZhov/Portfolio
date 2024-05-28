import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import ParallaxSkills from "./components/parallax-skills/ParallaxSkills";
import ParallaxPortfolio from "./components/parallax-portfolio/ParallaxPortfolio";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="skills">
        <ParallaxSkills/>
      </section>
      <section>
        <Skills />
      </section>
      <section id="portfolio">
        <ParallaxPortfolio />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
