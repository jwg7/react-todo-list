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
      <p>Completed Date: {props.toDo.completedDate}</p>
      <p>Description: {props.toDo.description}</p>
    </div>
  );
};

/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////

const ToDoForm = () => {
  const [title, setTitle] = useState("")
  const [priority, setPriority] = useState("")
  const [description, setDescription] = useState("")
  return (
    <div>
<label>Title: </label>
<input type="text" onChange={(e)=>{
setTitle(e.target.value)
}}></input>
<br/>
<label>Priority: </label>
<select onChange={(e)=>{
  setPriority(e.target.value)
}}>
<option>Select One</option>
<option value='Low'>Low</option>
<option value='Medium'>Medium</option>
<option value='High'>High</option>
</select>

<br/>
    </div>
  )
}


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
  return (
    <div className="App-header">
      <ToDoForm />
      <ToDoListContainer toDoList={toDoList} />
    </div>
  );
};

///////////////////////////////////////////////////////

export default App;
