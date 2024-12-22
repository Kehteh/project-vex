// async function putProject(projectId, title, description, goal, image) {
//     const url = `${import.meta.env.VITE_API_URL}/project/${projectId}`;
//     const token = window.localStorage.getItem("token");



//     const response = await fetch(url, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Token ${token}`
//         },
//         body: JSON.stringify({
//           "title": title,
//           "description": description,
//           "goal": goal,
//           "image": image,
//         }),
//       });
//       if (!response.ok) {
//         const fallbackError = "Error trying to update project";

//         const data = await response.json().catch(() => {
//             throw new Error(fallbackError);
//         });

//         const errorMessage = data?.detail ?? fallbackError;
//         throw new Error(errorMessage);
//     }

//     return response.json();
// }

// export default putProject;

async function putProject(projectId, title, description, image, goal) {
  const token = window.localStorage.getItem("token");
  if (!token) {
    throw new Error("Authentication token is missing.");
  }

  const url = `${import.meta.env.VITE_API_URL}/project/${projectId}`;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
        image,
        goal,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${errorData?.detail || 'Failed to update project'}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Request failed:", error);
    throw error; // Re-throw or handle the error appropriately
  }
}
export default putProject;
