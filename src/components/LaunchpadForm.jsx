import { useNavigate } from "react-router-dom";

import postProject from "../api/post-project.js";
import useAuth from "../hooks/use-auth.js";

import { useState } from "react";

function LaunchpadForm() { 
    const [projectDetails, setProjectDetails] = useState({
      title: "",
      description: "",
      goal: "",
});
  
    const handleChange = (event) => {
      const { id, value } = event.target;
      setProjectDetails((prevDetails) => ({
        ...prevDetails,
        [id]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      postProject(projectDetails.description, projectDetails.title, projectDetails.goal)
      console.log("Project Created:", projectDetails);
      // Add your form submission logic here
    };


    return (
      <form onSubmit={handleSubmit} >
        <div>
          <label htmlFor="title">Project Title:</label>
          <input type="text" id="title" placeholder="Enter Title of your Project" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="description" id="description" placeholder="Description" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="goal">Goal:</label>
          <input type="goal" id="goal" placeholder="Goal" onChange={handleChange} />
        </div>
        <button type="submit">Launch</button>
      </form>
    );
  }
  
  export default LaunchpadForm;
