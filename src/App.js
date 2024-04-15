import React from "react";
import store from "./Store/store"; // Importing the Redux store
import { Provider } from "react-redux"; // Importing the Redux Provider component
import ToDoApp from "./Components/ToDoApp"; // Importing the main ToDoApp component

function App() {
  return (
    // Wrapping the ToDoApp component with the Provider component to provide access to the Redux store
    <Provider store={store}>
      <ToDoApp /> {/* Rendering the main ToDoApp component */}
    </Provider>
  );
}

export default App;
