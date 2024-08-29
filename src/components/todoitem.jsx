function TodoItem({ id, status, title, handleStatus }) {
    return (
      <div className="styleTodoItem">
        <li>{title}</li>
        <h5>Status = {status ? "Completed" : "Not Completed"}</h5>
        <button className="styleButton" onClick={() => handleStatus(id)}>
          Change Status
        </button>
      </div>
    );
  }
  
  export default TodoItem;
  