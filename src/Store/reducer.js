import { ActionTypes } from "./ActionTypes"; // Import action types from ActionTypes file

// Retrieve saved state from localStorage or initialize with default state
const savedState = JSON.parse(localStorage.getItem("state"));
const initialState = savedState ?? {
  tasks: [],
  completedTasks: [],
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  // Log the action for debugging purposes
  console.log(action);

  // Handle different action types using a switch statement
  switch (action.type) {
    case ActionTypes.ADD_NEW_TASK: {
      // Add a new task to the tasks array
      const newTaskArray = [
        ...state.tasks,
        { id: action.payload.id, task: action.payload.task },
      ];
      // Create a new state with updated tasks array
      const newState = { ...state, tasks: newTaskArray };
      // Save the new state to localStorage
      localStorage.setItem("state", JSON.stringify(newState));
      // Return the new state
      return newState;
    }

    case ActionTypes.DELETE_TASK: {
      // Remove a task from the tasks array
      const newTaskArray = state.tasks.filter(
        (item) => item.id !== action.payload.id
      );
      // Remove the task from the completedTasks array as well
      const newCompletedTaskArray = state.completedTasks.filter(
        (id) => id !== action.payload.id
      );
      // Create a new state with updated tasks and completedTasks arrays
      const newState = {
        ...state,
        tasks: newTaskArray,
        completedTasks: newCompletedTaskArray,
      };
      // Save the new state to localStorage
      localStorage.setItem("state", JSON.stringify(newState));
      // Return the new state
      return newState;
    }

    case ActionTypes.TOGGLE_COMPLETED_TASK: {
      // Toggle completion status of a task
      const taskId = action.payload.id;
      const newCompletedTaskArray = state.completedTasks.includes(taskId)
        ? state.completedTasks.filter((id) => id !== taskId)
        : [...state.completedTasks, taskId];
      // Create a new state with updated completedTasks array
      const newState = { ...state, completedTasks: newCompletedTaskArray };
      // Save the new state to localStorage
      localStorage.setItem("state", JSON.stringify(newState));
      // Return the new state
      return newState;
    }

    default: {
      // If the action type doesn't match any case, return the current state
      return state;
    }
  }
};

export default reducer; // Export the reducer function as the default export
