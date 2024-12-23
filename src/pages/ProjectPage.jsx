import "../styles.css";
import { useParams } from "react-router-dom";
import useProject from "../hooks/use-project";
import PledgeForm from "../components/PledgeForm";
import UpdateProject from "../components/UpdateProjectForm";
import DeleteProject from "../components/DeleteProjectForm";


function ProjectPage() {

  // Here we use a hook that comes for free in react router called `useParams` to get the id from the URL so that we can pass it to our useProject hook.
      const { id } = useParams();
      // useProject returns three pieces of info, so we need to grab them all here
      const { project, isLoading, error } = useProject(id);

      const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };

      if (isLoading) {
            return (<p>loading...</p>)
      }
        
      if (error) {
            return (<p>{error.message}</p>)
      }

   return (
         <div className="projectdeets">
           <h2>{project.title}</h2>
           <h3>Created on: {formatDate(project.date_created)}</h3>
           <h3>Is open for support? {project.is_open ? 'Yes' : 'No'}<br/></h3>
           <h3>{project.description}</h3>
           <UpdateProject />
           <DeleteProject />
           <PledgeForm />
           <h2>Pledges:</h2>
           <ul>
               {project.pledges.map((pledgeData, key) => {
                     return (
                         <li key={key}>
                             {pledgeData.amount} from {pledgeData.supporter}
                         </li>
                     );
                 })}
             </ul>
         </div>
     );
  }
  
  export default ProjectPage;