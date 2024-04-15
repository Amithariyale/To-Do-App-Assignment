import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../Store/ActionTypes";
import "../Styles/TaskInput.scss";

function TaskInput() {
  // State to manage input value
  const [inputValue, setInputValue] = useState("");

  // Redux dispatch hook
  const dispatch = useDispatch();

  // Function to generate unique ID
  function generateUniqueId() {
    const timestamp = Date.now().toString(36);
    const randomNumber = Math.random().toString(36).substr(2, 5);
    return timestamp + randomNumber;
  }

  // Handler function for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    const uniqueId = generateUniqueId(); // Generate unique ID for the task
    // Dispatch action to add new task to Redux store
    dispatch({
      type: ActionTypes.ADD_NEW_TASK,
      payload: { id: uniqueId, task: e.target.task.value }, // Extract task from form field
    });
    setInputValue(""); // setting input value to an empty string after the task is created
  };

  return (
    // Form component for task input
    <form id="task_form" onSubmit={handleSubmit}>
      {/* Input field for adding new task */}
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Write here to add a new task"
        // Update inputValue state on input change
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue} // Controlled component with inputValue state
        required // Input is required
      />
      {/* Button to submit the form */}
      <button>
        Add Task<span className="material-icons">add_circle</span>
      </button>
    </form>
  );
}

export default TaskInput;
