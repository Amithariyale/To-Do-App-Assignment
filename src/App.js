import React from "react";
import store from "./Store/store";
import { Provider } from "react-redux";
import ToDoApp from "./Components/ToDoApp";

function App() {
  return (
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  );
}

export default App;
