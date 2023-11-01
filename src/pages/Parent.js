// This file contains the parent view used for inputs.
export const ParentPage = () => {
  return (
    <div>
      <h1>
        This is the parent page
      </h1>
      <span className="Default">
        Allergy information:
      </span>
      <input type="text" className="InputBox" placeholder="Enter" />

      <span className="Default">
        <br></br>
        Number of activities to plan:
      </span>
      <input type="text" className="InputBox" placeholder="Enter" />
      <span className="Default">
        <br></br>
        Activity 1:
        <input type="text" className="InputBox" placeholder="Enter" />
      </span>
      <span className="Default">
        <br></br>
        Time span for activity 1:
      </span>
      <input type="text" className="InputBox" placeholder="Enter" />
    </div>
  );
}


