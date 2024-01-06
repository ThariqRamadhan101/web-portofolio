import handLogo from "/src/assets/hand.svg";
import sendLogo from "/src/assets/send.svg";
const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Thariq Ramadhan Alchandra Yasrial
        <img src={handLogo} className="logo" alt="hand logo" />
      </h1>
      <h3 className="home__subtitle">A Developer</h3>
      <p className="home__description">
        Highly versatile and adaptable software engineer with a diverse skill
        set across multiple programming languages, frameworks, and technology
        domains.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <img src={sendLogo} className="logo" alt="send logo" />
      </a>
    </div>
  );
};

export default Data;
