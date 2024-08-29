import React from "react";
import TodoList from "./todolist";

function Todo() {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleAddTodo() {
    const newTodo = {
      title: text,
      status: false,
      id: new Date().toDateString() + text + Math.random()
    };
    const todosAfterNewItemAdded = [...todos, newTodo];
    setTodos(todosAfterNewItemAdded);
    setText("");
  }

  function handleStatus(id) {
    const todosAfterUpdation = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, status: !todo.status };
      } else {
        return todo;
      }
    });
    setTodos(todosAfterUpdation);
  }

  return (
    <div>
      <div className="styleInputBox">
        <input
          value={text}
          type="text"
          onChange={handleChange}
          placeholder="Enter Title"
          className="styleInput"
        ></input>
        <br />
        <br />
        <button className="styleButton" onClick={handleAddTodo}>
          ADD
        </button>
      </div>
      <TodoList todos={todos} handleStatus={handleStatus}></TodoList>
    </div>
  );
}

export default Todo;
