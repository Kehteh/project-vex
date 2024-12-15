import { useState } from "react";
import deleteProject from "../api/delete-project.js";
import useAuth from "../hooks/use-auth.js";

function DeleteProjectForm() {
    const { user } = useAuth(); // Assuming useAuth provides user context
    const [projectId, setProjectId] = useState(""); // State to store the project ID to delete
    const [error, setError] = useState(null); // State to store any error message
    const [isLoading, setIsLoading] = useState(false); // State to track if request is loading
    const [successMessage, setSuccessMessage] = useState(""); // To store success messages

    // Handle project deletion
    const handleDelete = async (event) => {
        event.preventDefault();

        if (!user) {
            setError("You must be logged in to delete a project.");
            return;
        }

        if (!projectId) {
            setError("Project ID is required.");
            return;
        }

        setIsLoading(true); // Start loading state
        setError(null); // Clear previous errors
        setSuccessMessage(""); // Clear previous success messages

        try {
            await deleteProject(projectId); // Call the delete function
            setSuccessMessage("Project deleted successfully!"); // On success, show success message
            setProjectId(""); // Reset the project ID field
        } catch (err) {
            setError(err.message || "An error occurred while deleting the project."); // Set error message
        } finally {
            setIsLoading(false); // End loading state
        }
    };

    return (
        <div>
            <h2>Delete a Campaign</h2>
            <form onSubmit={handleDelete}>
                <div>
                    <label htmlFor="projectId">Project ID</label>
                    <input
                        type="text"
                        id="projectId"
                        value={projectId}
                        onChange={(e) => setProjectId(e.target.value)}
                        placeholder="Enter Project ID"
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Deleting..." : "Delete Project"}
                </button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
    );
}

export default DeleteProjectForm;