import { projectsData } from "./Data";
import ProjectItems from "./ProjectItems";
import "./projects.css";

const Projects = () => {
  return (
    <div>
      <div className="project__container container grid">
        {projectsData
          .sort((a, b) => b.id - a.id)
          .map((item) => (
            <ProjectItems item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
