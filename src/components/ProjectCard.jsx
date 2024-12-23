import { Link } from "react-router-dom";
import "../styles.css";

function ProjectCard(props) {
    const { projectData } = props;
    const projectLink = `project/${projectData.id}`;

  return (
    <div class = "formcontainer">
      <Link to={projectLink}>
        <img src={projectData.image} />
        <h3>{projectData.title}</h3>
      </Link>
    </div>
  );
}

export default ProjectCard;