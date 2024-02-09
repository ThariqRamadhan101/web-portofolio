import { HiOutlineArrowSmRight } from "react-icons/hi";
import "./projects.css";

const ProjectItems = ({ item }: any) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project__button"
      >
        More
        <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
    </div>
  );
};

export default ProjectItems;
