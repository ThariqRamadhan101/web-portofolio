import { Data } from "./Data";
import "./skills.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Techs that I use</span>
      <div className="skills__container">
        {Data.map(({ id, image }) => {
          return (
            <div className="skills__card" key={id}>
              <img src={image} alt="kills" className="skills__img" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
