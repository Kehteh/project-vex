import "../styles.css";
import useProjects from "../hooks/use-projects";
import ProjectCard from "../components/ProjectCard";

function HomePage() {
  const { projects } = useProjects();
  return (
        <div id="project-list">
            {projects.map((projectData, key) => {
                return <ProjectCard key={key} projectData={projectData} />;
            })}
        </div>
    );
}

export default HomePage;