import { ADD_COUNTER, DEC_COUNTER } from "./Action_Type";

const initialState = { counter: 1 };
export const Reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case ADD_COUNTER:
      return {
        ...state, //for reference so that if we change the state redux can address the difference between prev and current state
        counter: state.counter + payload,
      };
    case DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - payload,
      };
    default:
      return state;
  }
};
