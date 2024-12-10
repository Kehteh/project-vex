// import { useState } from "react";

// function ProjectForm() 
//     const [projectDetails, setProjectDetails] = useState({
//       projectName: "",
//       description: "",
//       startDate: "",
//       endDate: "",
// });
  
//     const handleChange = (event) => {
//       const { id, value } = event.target;
//       setProjectDetails((prevDetails) => ({
//         ...prevDetails,
//         [id]: value,
//       }));
//     };
  
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       console.log("Project Created:", projectDetails);
//       // Add your form submission logic here
//     };

// function CreateProject() {
//     return (
//       <form>
//         <div>
//           <label htmlFor="title">Project Title:</label>
//           <input type="text" id="title" placeholder="Enter Title of your Project" />
//         </div>
//         <div>
//           <label htmlFor="description">Description:</label>
//           <input type="description" id="description" placeholder="Description" />
//         </div>
//         <button type="create">Create</button>
//       </form>
//     );
//   }
  
//   export default CreateProject;