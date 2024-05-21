import * as projects from "../assets";

function Project({ project }) {
  const { name, repo, link, description, image } = project;

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
        <img
           className="w-64 h-48 object-cover"
          src={projects[image]}
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

// <div className="p-3">
//       <img
//         src={projects[image]}
//         alt={name}
//         className="p-img"
//       />
//       <div className="">
//         <h1>
//           <a href={link}>{name}</a>{' '}
//           <a href={repo}>
//             <i className="fab fa-github"></i>
//           </a>
//         </h1>
//         <p>{description}</p>
//       </div>
//     </div>
