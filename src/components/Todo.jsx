import { useState } from "react";

function Todo({ id, title, onUpdate, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [titleUpdate, setTitleUpdate] = useState(title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      setTitleUpdate(e.target.value);
    }

    function handleClickUpdateTodo(e) {
      e.preventDefault();
      onUpdate(id, titleUpdate);
      setIsEdit(false);
    }

    return (
      <form
        className="flex justify-between mt-3 items-center gap-2"
        onSubmit={handleSubmit}
      >
        <input
          className="px-4 py-1 shadow-md text-xl text-slate-800 rounded w-full"
          type="text"
          onChange={handleChange}
          value={titleUpdate}
        />
        <button
          className="px-4 py-1 bg-green-400 rounded text-white"
          onClick={handleClickUpdateTodo}
        >
          Update
        </button>
      </form>
    );
  }

  function TodoElement() {
    function handleClickDeleteTodo() {
      onDelete(id);
    }
    return (
      <div className="flex justify-between mt-3 items-center">
        <div className="text-xl">{title}</div>
        <div className="flex gap-2 text-white">
          <button
            className="px-4 py-1 bg-orange-400 rounded"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
          <button
            className="px-4 py-1 bg-red-400 rounded"
            onClick={handleClickDeleteTodo}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  return <div className="px-4">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}

export default Todo;
