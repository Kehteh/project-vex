import { Link } from "react-router-dom";

function ProjectCard(props) {
    const { projectData } = props;
    const projectLink = `project/${projectData.id}`;

  return (
    <div>
      <Link to={projectLink}>
        <img src={projectData.image} />
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;