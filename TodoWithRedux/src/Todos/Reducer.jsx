import { ADD_TODO } from "./ActionTypes";

const initial = {
  todos: [],
};
export const Reducer = (state = initial, { payload, type }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    default:
      return state;
  }
};
