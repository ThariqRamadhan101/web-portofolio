import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./journey.css";
import LbnIcon from "../../assets/journey/lbn.png";
import NtustIcon from "../../assets/journey/ntust.png";
import ItbIcon from "../../assets/journey/itb.png";
import RkbIcon from "../../assets/journey/rkb.jpg";
import OcbcIcon from "../../assets/journey/ocbc.png";

const journeyData = [
  {
    title: "Software Engineer",
    subtitle: "PT Bank OCBC NISP Tbk",
    duration: "October 2022 - Present",
    icon: OcbcIcon,
  },
  {
    title: "Product Manager",
    subtitle: "PT Riset Kecerdasan Buatan",
    duration: "August 2021 - August 2022",
    icon: RkbIcon,
  },
  {
    title: "Researcher",
    subtitle: "PT Riset Kecerdasan Buatan",
    duration: "October 2020 - October 2021",
    icon: RkbIcon,
  },
  {
    title: "Part-Time Researcher",
    subtitle: "PT Riset Kecerdasan Buatan",
    duration: "March - October 2020",
    icon: RkbIcon,
  },
  {
    title: "Instrumentation System Lab Assistant",
    subtitle: "Electrical Engineering Lab Insititut Teknologi Bandung(ITB)",
    duration: "January - June 2020",
    icon: ItbIcon,
  },
  {
    title: "Intern",
    subtitle: "National Taiwan University of Science and Technology(NTUST)",
    duration: "June 2019",
    icon: NtustIcon,
  },
  {
    title: "Intern",
    subtitle: "PT Lentera Bumi Nusantara",
    duration: "May 2019",
    icon: LbnIcon,
  },
  {
    title: "Electrical Engineering Student",
    subtitle: "Insititut Teknologi Bandung(ITB)",
    duration: "June 2016 - October 2020",
    icon: ItbIcon,
  },
];

const Journey = () => {
  return (
    <section className="journey__section" id="journey">
      <h2 className="section__title">My Journey</h2>
      <span className="section__subtitle">Through time and space</span>
      <VerticalTimeline
        className="journey__container"
        layout="2-columns"
        lineColor={"#75757538"}
      >
        {journeyData.map((data, index) => (
          <VerticalTimelineElement
            key={index}
            date={data.duration}
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={
              <img
                src={data.icon}
                alt={`Icon for ${data.title}`}
                className="journey__icon"
              />
            }
          >
            <h3 className="journey__title">{data.title}</h3>
            <p className="journey__subtitle">{data.subtitle}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Journey;
