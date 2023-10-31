import Project from "./Project";

function Portfolio() {
  // fill in the required data, image file should be in the assets/projects folder and name should match the "default as " statment in index.js
  const projects = [
    {
      name: "project 1 test",
      description: "HTML/JS/CSS",
      link: "https://heroku.com",
      repo: "https://github.com/femke77",
      image: "cute",
    },
    {
      name: "project 2 test",
      description: "NRG Stack",
      link: "https://heroku.com/",
      repo: "https://github.com/femke77",
      image: "cute2",
    },
  ];

  // for each project, use the Project component to build a project
  return (
    <div>
      <div className="d-flex">
        {projects.map((project) => (
          <Project project={project} key={"project-" + project.name} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
