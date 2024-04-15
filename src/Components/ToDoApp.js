import React from "react";
import TaskInput from "./TaskInput"; // Import TaskInput component
import TaskList from "./TaskList"; // Import TaskList component
import Logo from "./Logo"; // Import Logo component
import "../Styles/ToDoApp.scss"; // Import ToDoApp styles

function ToDoApp() {
  return (
    // Main container for the ToDoApp
    <div id="main_container">
      {/* Render the Logo component */}
      <Logo />
      {/* Render the TaskInput component */}
      <TaskInput />
      {/* Render the TaskList component */}
      <TaskList />
    </div>
  );
}

export default ToDoApp;
