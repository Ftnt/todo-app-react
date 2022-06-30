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
    <div className="pt-10 max-w-xl m-auto ">
      <h1 className="p-4 text-center font-bold text-2xl">Todo React</h1>
      <form className="flex gap-1 justify-center py-4">
        <input
          className="px-4 py-2 border-2 text-slate-800 text-xl rounded w-full"
          type="text"
          onChange={handleChange}
          value={title}
          required
        />
        <button
          className="rounded bg-sky-600 px-4 py-2 text-white hover:bg-sky-500"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
      <div>
        <h2 className="font-semibold text-blue-300 underline">TODO's</h2>
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
