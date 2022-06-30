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
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={titleUpdate} />
          <button onClick={handleClickUpdateTodo}>Update</button>
        </form>
      </>
    );
  }

  function TodoElement() {
    function handleClickDeleteTodo() {
      onDelete(id);
    }
    return (
      <div>
        <div>{title}</div>
        <button onClick={() => setIsEdit(true)}>edit</button>
        <button onClick={handleClickDeleteTodo}>delete</button>
      </div>
    );
  }

  return <div>{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}

export default Todo;
