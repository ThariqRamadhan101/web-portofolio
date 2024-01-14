import "./about.css";
import AboutImg from "../../assets/profile-about.png";
import CV from "../../assets/CV-Thariq Ramadhan.pdf";
import { IoDocumentAttachOutline } from "react-icons/io5";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">A brief introduction</span>
      <div className="about__container container grid">
        <img src={AboutImg} alt="about" className="about__img" />
        <div className="about__data">
          <Info />
          <p className="about__description">
            I have a strong affinity for learning new things and consistently
            seek opportunities to expand my knowledge.
          </p>
          <a download="" href={CV} className="button button--flex">
            Download CV
            <IoDocumentAttachOutline className="button__icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
