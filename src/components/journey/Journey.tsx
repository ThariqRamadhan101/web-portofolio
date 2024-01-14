import "./journey.css";
import { HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const journeyData = [
  {
    title: "Intern",
    subtitle: "PT Lentera Bumi Nusantara",
    duration: "May 2019",
  },
  {
    title: "Intern",
    subtitle: "National Taiwan University of Science and Technology(NTUST)",
    duration: "June 2019",
  },
  {
    title: "Instrumentation System Lab Assistant",
    subtitle: "Electrical Engineering Lab Insititut Teknologi Bandung(ITB)",
    duration: "January-June 2020",
  },
  {
    title: "Part-Time Researcher",
    subtitle: "PT Riset Kecerdasan Buatan",
    duration: "March-October 2020",
  },
  {
    title: "Researcher",
    subtitle: "PT Riset Kecerdasan Buatan",
    duration: "October 2020-October 2021",
  },
  {
    title: "Product Manager",
    subtitle: "PT Riset Kecerdasan Buatan",
    duration: "August 2021-August 2022",
  },
  {
    title: "Software Engineer",
    subtitle: "Bank OCBC",
    duration: "October 2022-Present",
  },
];

const Journey = () => {
  return (
    <section className="journey section" id="journey">
      <h2 className="section__title">My Journey</h2>
      <span className="section__subtitle">Through time and space</span>

      <div className="journey__container container">
        <div className="journey__tabs">
          <div className={"journey__button button--flex journey__active"}>
            <HiOutlineBriefcase className="journey__icon" />
            Experience
          </div>
        </div>

        <div className="journey__sections">
          <div className={"journey__content journey__content-active"}>
            {journeyData.map((data, index) => (
              <div key={index} className="journey__data">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      {data.title && (
                        <h3 className="journey__title">{data.title}</h3>
                      )}
                      {data.subtitle && (
                        <span className="journey__subtitle">
                          {data.subtitle}
                        </span>
                      )}
                      {data.duration && (
                        <div className="journey__calendar">
                          <HiOutlineCalendar className="journey__calendar-icon" />{" "}
                          {data.duration}
                        </div>
                      )}
                    </div>
                    <div>
                      {data.title && <span className="journey__rounder"></span>}
                      {data.title && <span className="journey__line"></span>}
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>
                      <span className="journey__rounder"></span>
                      <span className="journey__line"></span>
                    </div>
                    <div>
                      {data.title && (
                        <h3 className="journey__title">{data.title}</h3>
                      )}
                      {data.subtitle && (
                        <span className="journey__subtitle">
                          {data.subtitle}
                        </span>
                      )}
                      {data.duration && (
                        <div className="journey__calendar">
                          <HiOutlineCalendar className="journey__calendar-icon" />{" "}
                          {data.duration}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
