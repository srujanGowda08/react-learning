import AppName from "./components/AppName";
import AddToDo from "./components/AddTodo";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <div className="Item-container">
        <AddToDo />
        <ToDoItem1 />
        <ToDoItem2 />
      </div>
    </center>
  );
}

export default App;
