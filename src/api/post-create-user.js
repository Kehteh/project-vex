async function postCreateUser(username = "", password = "", email = "") {
  // Input validation
  if (!username || !password || !email) {
    throw new Error("Username, password, and email are required.");
  }

  const url = `${import.meta.env.VITE_API_URL}/users/`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5-second timeout

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, email }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const fallbackError = "Error trying to create new user";
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });

      const errorMessage = data?.detail ?? fallbackError;
      throw new Error(errorMessage);
    }

    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out. Please try again.");
    }
    throw error; // Re-throw other errors
  }
}

export default postCreateUser;
