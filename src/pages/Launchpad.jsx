import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";
import "./Launchpad.css";

function Launchpad() {
  const { projects } = createProjects();
  return (
        <div id="projectid">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    );
}

export default Launchpad;