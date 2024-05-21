import Project from "./Project";
import projectData from '../utils/data.json'

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="d-flex">
        {projectData.map((project) => (
          <Project project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
