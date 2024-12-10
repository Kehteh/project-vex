import { useNavigate } from "react-router-dom";

import postLogin from "../api/post-login.js";
import useAuth from "../hooks/use-auth.js";

import { useState } from "react";

function LaunchpadForm() { 
    const [projectDetails, setProjectDetails] = useState({
      projectName: "",
      description: "",
      startDate: "",
      endDate: "",
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
      console.log("Project Created:", projectDetails);
      // Add your form submission logic here
    };


    return (
      <form>
        <div>
          <label htmlFor="title">Project Title:</label>
          <input type="text" id="title" placeholder="Enter Title of your Project" />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="description" id="description" placeholder="Description" />
        </div>
        <div>
          <label htmlFor="goal">Goal:</label>
          <input type="goal" id="goal" placeholder="Goal" />
        </div>
        <button  onSubmit={handleSubmit} type="create">Create</button>
      </form>
    );
  }
  
  export default LaunchpadForm;
