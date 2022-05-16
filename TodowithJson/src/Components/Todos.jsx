import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function Todos() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = () => {
    fetch("http://localhost:4500/todos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Data: ", data);
        setTodos(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  const addTodos = () => {
    const payload = {
      title: text,
      id: nanoid(8),
      status: false,
    };
    fetch("http://localhost:4500/todos", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      // no need to refresh page if using from multiple device
      getTodos();
      setText("");
    });
  };

  return (
    <div>
      <h2> Todos</h2>
      <input
        type="text"
        value={text}
        placeholder="add Todo"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodos}> Add Todo</button>
      {todos.map((e) => (
        <div key={e.id}> {e.title}</div>
      ))}
    </div>
  );
}

export default Todos;
