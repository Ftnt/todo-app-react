import { useState } from "react";
import Todo from "./Todo";

function TodoApp() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  }

  function updateTodo(id, titleUpdate) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: titleUpdate } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todos) => todos.id !== id));
  }

  return (
    <div>
      <form action="">
        <input type="text" onChange={handleChange} value={title} />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <div>
        {todos.map(({ id, title }) => (
          <Todo
            key={id}
            title={title}
            id={id}
            onUpdate={updateTodo}
            onDelete={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
