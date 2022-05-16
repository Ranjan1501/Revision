import { useSelector } from "react-redux";

export const TodoList = () => {
  let todos = useSelector((a) => a.todoState.todos);
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}> {todo.title}</div>
      ))}
    </div>
  );
};
