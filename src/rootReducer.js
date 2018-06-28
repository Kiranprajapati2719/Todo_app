import { ADD_TODO, REMOVE_TODO } from "./actionCreater";

const initialState = {
  todos: [],
  id: 0
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      var newState = { ...state };
      newState.id++;
      return {
        ...newState,
        todos: [...newState, todos, { task: action.task, id: newState.id }]
      };
    case REMOVE_TODO:
      return { count: state.count - 1 };
    default:
      return state;
  }
}
