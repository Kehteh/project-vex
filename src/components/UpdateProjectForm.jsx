// import putProject from "../api/put-project.js";
// import useAuth from "../hooks/use-auth.js";

// import { useState } from "react";

// function UpdateProjectForm() { 
//     const [projectDetails, setProjectDetails] = useState({
//       projec: "id",
//       description: "description",
//       // goal: "",
//       // image: ""
    
// });

//     const {auth, setAuth} = useAuth() 
  
//     const handleChange = (event) => {
//       const { id, value } = event.target;
//       setProjectDetails((prevDetails) => ({
//         ...prevDetails,
//         [id]: value,
//       }));
//     };
//     <div class = "formcontainer">
//     <label htmlFor="image">Image:</label>
//     <input type="URL" id="image" placeholder="Image" onChange={handleChange} />
//   </div>
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       putProject(auth.token, projectDetails.description, projectDetails.id, projectDetails.title, projectDetails.goal, projectDetails.image)
//       console.log("Project Updated:", projectDetails);
//       // Add your form submission logic here
//     };

  //   return (
  //     <form onSubmit={handleSubmit} >
  //       <div class = "formcontainer">
  //         <h2>Update a Campaign</h2>
          
  //         <label htmlFor="title">Project Title:</label>
  //         <input type="text" id="title" placeholder="Enter Title of your Project" onChange={handleChange} />
  //       </div>
  //       <div class = "formcontainer">
  //         <label htmlFor="image">Image:</label>
  //         <input type="URL" id="image" placeholder="Image" onChange={handleChange} />
  //       </div>
  //       <div class = "formcontainer">
  //         <label htmlFor="description">Description:</label>
  //         <input type="description" id="description" placeholder="Description" onChange={handleChange} />
  //       </div>
  //       <div class = "formcontainer">
  //         <label htmlFor="goal">Goal:</label>
  //         <input type="int" id="goal" placeholder="Goal" onChange={handleChange} />
  //       </div>
  //       <div class = "formcontainer">
  //         <label htmlFor="image">Image:</label>
  //         <input type="URL" id="image" placeholder="Image" onChange={handleChange} />
  //       </div>
  //       <button type="submit">Relaunch</button>
  //     </form>
  //   );
  // }
  
  // export default UpdateProjectForm;

  // import { useState, useEffect } from "react";
  // import { useParams, useNavigate } from "react-router-dom";
  // import putProject from "../api/put-project"; // Ensure you're importing the correct update function
  
  // function UpdateProjectForm() {
  //   const navigate = useNavigate();
  //   const { id } = useParams();
  
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [projectDetails, setProjectDetails] = useState({
  //     title: "",
  //     description: "",
  //     image: "",
  //     goal: null,
  //   });
  
  //   // Fetch existing project details to pre-fill the form
  //   useEffect(() => {
  //     async function fetchProjectDetails() {
  //       const response = await fetch(`${import.meta.env.VITE_API_URL}/project/${projectId}`, {
  //         headers: {
  //           "Authorization": `Token ${window.localStorage.getItem("token")}`,
  //         },
  //       });
  //       const data = await response.json();
  //       setProjectDetails({
  //         title: data.title,
  //         description: data.description,
  //         image: data.image,
  //         goal: data.goal,
  //       });
  //     }
  //     fetchProjectDetails();
  //   }, [id]);
  
  //   const handleChange = (event) => {
  //     const { id, value } = event.target;
  //     setProjectDetails((prevProjectDetails) => ({
  //       ...prevProjectDetails,
  //       [id]: value,
  //     }));
  //   };
  
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     setIsLoading(true);
  
  //     // Ensure that the required fields (title, description, image, and goal) are filled out
  //     if (projectDetails.title && projectDetails.description && projectDetails.image && projectDetails.goal) {
  //       putProject(id, projectDetails.title, projectDetails.description, projectDetails.image, projectDetails.goal)
  //         .then((response) => {
  //           console.log(response);
  //           setIsLoading(false);
  //           navigate(`/project/${id}`); // Redirect after successful update
  //         })
  //         .catch((error) => {
  //           setIsLoading(false);
  //           window.alert(error.message);
  //         });
  //     } else {
  //       setIsLoading(false);
  //       window.alert("Please fill out all fields.");
  //     }
  //   };
  
  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div className="formcontainer">
  //         <h2>Update a Campaign</h2>
          
  //         <label htmlFor="title">Campaign:</label>
  //         <input 
  //           type="text" 
  //           id="title" 
  //           placeholder="Enter new title of your Project" 
  //           value={projectDetails.title} 
  //           onChange={handleChange} 
  //         />
  //       </div>
  
  //       <div className="formcontainer">
  //         <label htmlFor="image">Image:</label>
  //         <input 
  //           type="URL" 
  //           id="image" 
  //           placeholder="Image" 
  //           value={projectDetails.image} 
  //           onChange={handleChange} 
  //         />
  //       </div>
  
  //       <div className="formcontainer">
  //         <label htmlFor="description">Description:</label>
  //         <input 
  //           type="text" 
  //           id="description" 
  //           placeholder="Description" 
  //           value={projectDetails.description} 
  //           onChange={handleChange} 
  //         />
  //       </div>
  
  //       <div className="formcontainer">
  //         <label htmlFor="goal">Goal:</label>
  //         <input 
  //           type="number" 
  //           id="goal" 
  //           placeholder="Goal" 
  //           value={projectDetails.goal} 
  //           onChange={handleChange} 
  //         />
  //       </div>
  
  //       <button type="submit" disabled={isLoading}>
  //         {isLoading ? "Updating..." : "Relaunch"}
  //       </button>
  //     </form>
  //   );
  // }
  
  // export default UpdateProjectForm;
  
  import { useState, useEffect } from "react";
  import { useParams, useNavigate } from "react-router-dom";
  import putProject from "../api/put-project"; // Ensure you're importing the correct update function
  
  function UpdateProjectForm() {
    const navigate = useNavigate();
    const { id } = useParams(); // Get the project ID from the URL
  
    const [isLoading, setIsLoading] = useState(false);
    const [projectDetails, setProjectDetails] = useState({
      title: "",
      description: "",
      image: null,
      goal: 0,
    });
  
    // Fetch existing project details to pre-fill the form
    useEffect(() => {
      async function fetchProjectDetails() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/project/${id}`, {
          headers: {
            "Authorization": `Token ${window.localStorage.getItem("token")}`, // Token for authentication
          },
        });
  
        if (!response.ok) {
          // Handle error when the project is not found or API request fails
          const errorData = await response.json();
          window.alert(errorData?.detail || "Failed to fetch project details.");
          return;
        }
  
        const data = await response.json();
        setProjectDetails({
          title: data.title,
          description: data.description,
          image: data.image,
          goal: data.goal,
        });
      }
  
      fetchProjectDetails();
    }, [id]); // Fetch project details on component mount (when `id` changes)
  
    const handleChange = (event) => {
      const { id, value } = event.target;
      setProjectDetails((prevProjectDetails) => ({
        ...prevProjectDetails,
        [id]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true);
  
      // Ensure that the required fields (title, description, image, and goal) are filled out
      if (projectDetails.title && projectDetails.description && projectDetails.image && projectDetails.goal) {
        putProject(id, projectDetails.title, projectDetails.description, projectDetails.image, projectDetails.goal)
          .then((response) => {
            console.log(response);
            setIsLoading(false);
            navigate(`/project/${id}`); // Redirect after successful update
          })
          .catch((error) => {
            setIsLoading(false);
            window.alert(error.message); // Show error message
          });
      } else {
        setIsLoading(false);
        window.alert("Please fill out all fields.");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="formcontainer">
          <h2>Update a Campaign</h2>
          
          <label htmlFor="title">Campaign:</label>
          <input
            type="text"
            id="title"
            placeholder="Enter new title of your Project"
            value={projectDetails.title}
            onChange={handleChange}
          />
        </div>
  
        <div className="formcontainer">
          <label htmlFor="image">Image:</label>
          <input
            type="URL"
            id="image"
            placeholder="Image"
            value={projectDetails.image}
            onChange={handleChange}
          />
        </div>
  
        <div className="formcontainer">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            placeholder="Description"
            value={projectDetails.description}
            onChange={handleChange}
          />
        </div>
  
        <div className="formcontainer">
          <label htmlFor="goal">Goal:</label>
          <input
            type="number"
            id="goal"
            placeholder="Goal"
            value={projectDetails.goal}
            onChange={handleChange}
          />
        </div>
  
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Updating..." : "Relaunch"}
        </button>
      </form>
    );
  }
  
  export default UpdateProjectForm;
  