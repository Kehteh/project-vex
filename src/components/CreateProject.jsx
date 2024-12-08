function CreateProject() {
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
        <button type="create">Create</button>
      </form>
    );
  }
  
  export default CreateProject;