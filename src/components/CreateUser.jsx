import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postCreateUser from "../api/post-create-user";

function CreateAccountForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setError(null); // Clear any previous errors

    try {
      const response = await postCreateUser(
        formData.username,
        formData.password,
        formData.email
      );
      console.log("Account created successfully:", response);
      navigate("/login"); // Redirect to login page after successful account creation
    } catch (err) {
      console.error("Error creating account:", err.message);
      setError(err.message); // Display error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Enter username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Enter password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Create Account</button>
    </form>
  );
}

export default CreateAccountForm;
