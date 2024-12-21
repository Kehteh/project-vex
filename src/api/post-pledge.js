async function postPledge(comment, amount, anonymous, project) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const token = window.localStorage.getItem("token");

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Specify the content type
            "Authorization": `Token ${token}`, // Include the token for authorization
        },
        body: JSON.stringify({
            "comment": comment,
            "amount": amount,
            "anonymous": anonymous,
            "project": project,

            
        }),
    });

    if (!response.ok) {
        const fallbackError = "Error trying to pledge";

        // Attempt to parse the error response; fallback to a generic error message
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });

        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }

    // Return the JSON response from the API
    return response.json();
}

export default postPledge;