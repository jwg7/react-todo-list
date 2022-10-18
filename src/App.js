import { useState } from "react";
import "./App.css";

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const ToDoListContainer = (props) => {
  const toDoList = props.toDoList;
  return (
    <div>
      <h1>Todo List</h1>
      {toDoList.map((toDo, index) => {
        return <ToDoItem toDo={toDo} key={index} />;
      })}
    </div>
  );
};

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////

const ToDoItem = (props) => {
  return (
    <div>
      <h2>{props.toDo.title}</h2>
      <p>Priority: {props.toDo.priority}</p>
      <p>Creation Date: {props.toDo.creationDate}</p>
      {props.toDo.completedDate && (
        <p>Completed Date: {props.toDo.completedDate}</p>
      )}
      <p>Description: {props.toDo.description}</p>
    </div>
  );
};

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const ToDoForm = (props) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <label>Title: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <label>Priority: </label>
      <select
        onChange={(e) => {
          setPriority(e.target.value);
        }}
      >
        <option>Select One</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <br />
      <label>Description: </label>
      <textarea
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          props.handleAddToDo(title, priority, description);
        }}
      >
        Add ToDo
      </button>
    </div>
  );
};

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

const App = () => {
  const [toDoList, setToDoList] = useState([
    {
      title: "Implement ToDo List",
      priority: "High",
      isComplete: false,
      description: "Implement the todo list application",
      creationDate: new Date().toString(),
      completedDate: null,
    },
  ]);

  const handleAddToDo = (title, priority, description) => {
    const newToDo = {
      title: title,
      priority: priority,
      isComplete: false,
      description: description,
      creationDate: new Date().toString(),
      completedDate: null,
    };
    const toDoListCopy = [...toDoList, newToDo];
    setToDoList(toDoListCopy);
  };

  return (
    <div className="App-header">
      <ToDoForm handleAddToDo={handleAddToDo} />
      <ToDoListContainer toDoList={toDoList} />
    </div>
  );
};

///////////////////////////////////////////////////////

export default App;
