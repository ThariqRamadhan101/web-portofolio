import Projects from "./Projects";
import "./projects.css";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portofolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">My Recent Projects</span>

      <Projects />
    </section>
  );
};

export default Portfolio;
