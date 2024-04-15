import React from "react";
import { useSelector, useDispatch } from "react-redux";
import clipboard from "../Assets/Clipboard.png";
import "../Styles/TaskList.scss";
import TaskCard from "./TaskCard";
import { ActionTypes } from "../Store/ActionTypes";

function TaskList() {
  // Accessing tasks and completedTasks state from Redux store
  const tasks = useSelector((state) => state.tasks);
  const completedTasks = useSelector((state) => state.completedTasks);
  const dispatch = useDispatch();

  // Function to delete a task
  const deleteTask = (id) => {
    dispatch({ type: ActionTypes.DELETE_TASK, payload: { id } });
  };

  // Function to mark a task as completed
  const setCompletedTask = (id) => {
    dispatch({ type: ActionTypes.TOGGLE_COMPLETED_TASK, payload: { id } });
  };

  // Render the TaskList component
  return (
    <div id="task_list_container">
      {/* Check if there are tasks */}
      {tasks.length ? (
        // If there are tasks, map over them and render TaskCard for each task
        tasks.map((taskObj) => (
          <TaskCard
            key={taskObj.id}
            taskObj={taskObj}
            deleteTask={deleteTask}
            setCompletedTask={setCompletedTask}
            isCompleted={completedTasks.includes(taskObj.id)}
          />
        ))
      ) : (
        // If there are no tasks, render a message
        <div id="empty-container">
          <img src={clipboard} alt="" />
          <p style={{ color: " #808080" }}>You have no To-do Items As of now</p>
        </div>
      )}
    </div>
  );
}

export default TaskList;
