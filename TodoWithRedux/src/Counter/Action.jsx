import { ADD_COUNTER, DEC_COUNTER } from "./Action_Type";

export const addCounter = (payload) => {
  return {
    type: ADD_COUNTER,
    payload,
  };
};

export const decCounter = (payload) => {
  return {
    type: DEC_COUNTER,
    payload,
  };
};
