import "./styles.css";
import Todo from "./components/todo";

export default function App() {
  const styles = {
    border: "1px solid black",
    width: "100%",
    height: "100px",
    backgroundColor: "#9417E2",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };
  return (
    <div className="App">
      <h1 style={styles}>TODO APP</h1>
      <Todo></Todo>
    </div>
  );
}
