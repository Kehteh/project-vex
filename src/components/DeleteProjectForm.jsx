import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import deleteProject from "../api/delete-project"; // Assuming API utility is available

function DeleteProjectForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the project ID from the URL

  const [isLoading, setIsLoading] = useState(false); // State to manage loading status

  const handleDelete = (event) => {
    event.preventDefault();
    setIsLoading(true);

    if (id) { // Ensure the project ID exists
      deleteProject(id) // Call the delete function
        .then(() => {
          setIsLoading(false);
          window.alert("Project deleted successfully."); // Notify user of success
          navigate("/"); // Redirect to homepage or another page
        })
        .catch((error) => {
          setIsLoading(false);
          window.alert(error.message); // Notify user of error
        });
    } else {
      window.alert("Invalid project ID."); // Error if no project ID
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <h2>Delete Project</h2>
      <p>Would you like to delete this campaign? This action cannot be undone, and I won't double check.</p>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete Project"}
      </button>
    </form>
  );
}

export default DeleteProjectForm;
