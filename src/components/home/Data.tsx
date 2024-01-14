import handLogo from "../../assets/hand.svg";
import { GrSend } from "react-icons/gr";

interface DataProps {
  handleHandHover: () => void;
  handleHandLeave: () => void;
}

const Data: React.FC<DataProps> = ({ handleHandHover, handleHandLeave }) => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Thariq Ramadhan Alchandra Yasrial
        <img
          src={handLogo}
          className="home__hand"
          alt="hand logo"
          onMouseEnter={handleHandHover}
          onMouseLeave={handleHandLeave}
        />
      </h1>
      <h3 className="home__subtitle">A Developer</h3>
      <p className="home__description">
        Experienced developer proficient in various programming languages,
        frameworks, and tech domains.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello <GrSend className="button__icon" />
      </a>
    </div>
  );
};

export default Data;
