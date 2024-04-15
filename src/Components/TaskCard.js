import React from "react";

function TaskCard(props) {
  // Destructure props
  const { taskObj, deleteTask, setCompletedTask, isCompleted } = props;

  return (
    // Task card container with dynamic background color
    <div
      className="task_card"
      style={{ backgroundColor: isCompleted ? "#296517" : "#333333" }}
    >
      {/* Task content */}
      <p>{taskObj.task}</p>
      {/* Task actions */}
      <div>
        <div>
          {/* Checkbox for task completion */}
          <label htmlFor={taskObj.id} className="material-icons">
            {/* Render different icon based on completion status */}
            {isCompleted ? "check_box" : "check_box_outline_blank"}
          </label>
          {/* Hidden checkbox input to toggle task completion */}
          <input
            style={{ display: "none" }}
            onChange={() => setCompletedTask(taskObj.id)} // Call setCompletedTask when checkbox changes
            type="checkbox"
            name="checkbox"
            id={taskObj.id}
          />
        </div>
        {/* Button to delete the task */}
        <button
          onClick={() => {
            deleteTask(taskObj.id); // Call deleteTask function on button click
          }}
        >
          <span className="material-icons">delete</span>
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
