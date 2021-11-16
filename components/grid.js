import Image from "next/image";

function Grid({ projects,type }) {
  return <ul>{projects.map((project,i) => {
      return <li key={i}>
          <h4>{project.name}</h4>
          <Image src={project.image} height="500" width="500" alt="project"/>
          <div className="links"><a href={project.link}>Link</a>
          {type=="github"?<a href={project.link}>Live Link</a>:null}
          </div>
          
      </li>
  })}</ul>;
}

export default Grid;
