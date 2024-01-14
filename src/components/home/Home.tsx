import "./home.css";
import Social from "./Social";
import Data from "./Data";
import Scroll from "./Scroll";
import { useState } from "react";
import profileHome from "../../assets//profile-home.png";
import profileHomeAlter from "../../assets//profile-home-alter.png";
const Home = () => {
  const [isHandHovered, setIsHandHovered] = useState(false);

  const handleHandHover = () => {
    setIsHandHovered(true);
  };

  const handleHandLeave = () => {
    setIsHandHovered(false);
  };

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div
            className="home__img"
            style={{
              background: isHandHovered
                ? `url(${profileHomeAlter}) no-repeat center/cover`
                : `url(${profileHome}) no-repeat center/cover`,
            }}
          ></div>
          <Data
            handleHandHover={handleHandHover}
            handleHandLeave={handleHandLeave}
          />
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Home;
