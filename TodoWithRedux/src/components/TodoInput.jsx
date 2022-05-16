import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addTodo } from "../Todos/Action";

export const TodoInput = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleClick = () => {
    const payload = {
      title,
      status: false,
      id: nanoid(8),
    };
    const action = addTodo(payload);
    dispatch(action);
  };

  return (
    <>
      <input
        type="text"
        value={title}
        placeholder="add something for todos"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick}>ADD TODO </button>
    </>
  );
};
