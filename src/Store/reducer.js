import { ActionTypes } from "./ActionTypes";

const initialState = {
  tasks: [],
  completedTasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TASK: {
    }

    case ActionTypes.DELETE_TASK: {
    }

    default: {
      return state;
    }
  }
};

export default reducer;
