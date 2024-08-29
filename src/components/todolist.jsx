import TodoItem from "./todoitem";

function TodoList({ todos, handleStatus }) {
  return (
    <div>
      {todos.map((item) => {
        return (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            status={item.status}
            handleStatus={handleStatus}
          ></TodoItem>
        );
      })}
    </div>
  );
}

export default TodoList;
