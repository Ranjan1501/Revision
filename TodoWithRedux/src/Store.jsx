import { createStore, combineReducers } from "redux";
import { Reducer as CounterReducer } from "./Counter/Reducer";
import { Reducer as TodoReducer } from "./Todos/Reducer";

export const rootReducer = combineReducers({
  counterState: CounterReducer,
  todoState: TodoReducer,
});
export const store = createStore(rootReducer);
console.log(store.getState());
