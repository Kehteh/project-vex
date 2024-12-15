import putProject from "../api/put-project.js";
import useAuth from "../hooks/use-auth.js";

import { useState } from "react";

function UpdateProjectForm() { 
    const [projectDetails, setProjectDetails] = useState({
      title: "",
      description: "",
      goal: "",
      image: ""
    
});

    const {auth, setAuth} = useAuth() 
  
    const handleChange = (event) => {
      const { id, value } = event.target;
      setProjectDetails((prevDetails) => ({
        ...prevDetails,
        [id]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      postProject(auth.token, projectDetails.description, projectDetails.title, projectDetails.goal, projectDetails.image)
      console.log("Project Created:", projectDetails);
      // Add your form submission logic here
    };


    return (
      <form onSubmit={handleSubmit} >
        <div>
          <h2>Update a Campaign</h2>
          
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
        <div>
          <label htmlFor="image">Image:</label>
          <input type="url" id="image" placeholder="Image" onChange={handleChange} />
        </div>
        <button type="submit">Relaunch</button>
      </form>
    );
  }
  
  export default UpdateProjectForm;