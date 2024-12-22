async function postProject(title, description, goal, image) {
    const URL = `${import.meta.env.VITE_API_URL}/project/`;
    const token = window.localStorage.getItem("token");



    const response = await fetch(URL, {
      method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`
      },
      body: JSON.stringify({
        "title": title,
        "description": description,
        "goal": goal,
        "image": image,
        "anonymous": true,
      }),
    });
  
    if (!response.ok) {
      const fallbackError = `Error trying to create new project`;
  
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });
  
      const errorMessage = data?.detail ?? fallbackError;
      throw new Error(errorMessage);
    }
  
    return await response.json();
  }
  
  export default postProject;