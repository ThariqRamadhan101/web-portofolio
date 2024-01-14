import { MdElectricBolt } from "react-icons/md";
import { TbMathPi } from "react-icons/tb";
import IndonesiaFlag from "../../assets/indonesia.png";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <MdElectricBolt className="about__icon" />
        <h3 className="about__title">Major</h3>
        <span className="about__subtitle">Electrical Engineer</span>
      </div>
      <div className="about__box">
        <TbMathPi className="about__icon" />
        <h3 className="about__title">Types of Skills</h3>
        <span className="about__subtitle">Pi-Shaped</span>
      </div>
      <div className="about__box">
        <img src={IndonesiaFlag} alt="Indonesia" className="about__icon" />

        <h3 className="about__title">Nationality</h3>
        <span className="about__subtitle">Indonesia</span>
      </div>
    </div>
  );
};

export default Info;
