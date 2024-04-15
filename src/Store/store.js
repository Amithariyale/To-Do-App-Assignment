import { legacy_createStore as createStore } from "redux"; // Import createStore  from Redux library
import reducer from "./reducer"; // Import reducer

// Create Redux store with the reducer
const store = createStore(reducer);

export default store; // Export the created store as default
