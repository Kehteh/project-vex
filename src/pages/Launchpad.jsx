import "../styles.css";

import CreateProject from "../components/LaunchpadForm";
import UpdateProject from "../components/UpdateProjectForm";
import DeleteProject from "../components/DeleteProjectForm";

function Launchpad() {
  return (
    <div className="Launchpad">
      <h1>Launchpad: Create, Update or delete a Campaign!</h1>
      <CreateProject />
      <UpdateProject />
      <DeleteProject />
    </div>
  );
}
export default Launchpad;