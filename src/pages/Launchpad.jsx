import "../styles.css";

import CreateProject from "../components/LaunchpadForm";


function Launchpad() {
  return (
    <div className="Launchpad">
      <h1>Launchpad: Launch a Campaign!</h1>
      <CreateProject />
    </div>
  );
}
export default Launchpad;