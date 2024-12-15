async function updateProject(projectId, token, projectData) {

    const url = `${import.meta.env.VITE_API_URL}/project/${projectId}`;

    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${token}`,
            },
            body: JSON.stringify({
                title: projectData.title,
                description: projectData.description,
                goal: projectData.goal,
                image: projectData.image,
                is_open: projectData.is_open,
            }),
        });


        if (!response.ok) {
            const fallbackError = `Failed to update project with ID ${projectId} (Status: ${response.status})`;

            const data = await response.json().catch(() => {
                throw new Error(fallbackError);
            });

            const errorMessage = data?.detail ?? fallbackError;
            throw new Error(errorMessage);
        }

        return await response.json();
    } catch (error) {
        console.error("Error updating project:", error.message);
        throw error;
    }
}

export default updateProject;