import * as projects from "../assets/projects/index.js";

function Project({ project }) {
  const { name, repo, link, description, image } = project;
  console.log(projects);
  console.log(image);
  
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
        <img
          src={projects[image]}
           className="w-64 h-48 object-cover"
          alt={name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <a href={link}>{name}</a>{' '}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <a href={repo}>
             <i className="fab fa-github"></i>
          </a>
          </span>
         
        </div>
      </div>
    </>
  );
}

export default Project;
// STUDENT STARTER CODE

{/* <div className="p-3">
      <img
        src={projects[image]}
        alt={name}
        // change this:
        style={{width: "250px", height: "250px"}}
      />
      <div className="">
        <h1>
          <a href={link}>{name}</a>{' '}
          <a href={repo}>
            <i className="fab fa-github"></i>
          </a>
        </h1>
        <p>{description}</p>
      </div>
    </div> */}
    
// FA link   
    // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
