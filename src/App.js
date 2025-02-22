import { useEffect, useState } from "react";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
function App() {
  let [tasks, setTask] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTask([...tasks, task]); // Corrected this line
  };
  
  const updatetask = (index, updatedtask)=>{
   let newtask = [...tasks];
    newtask[index] = updatedtask;
    setTask(newtask);
  }

  const deleteTask = (index)=>{
      setTask(tasks.filter((_,i)=> i !== index))
  }

  const clearTask = (index)=> {
    setTask([]);
  }
  return (
    <div className="App">
      <header className="header"> {/* Changed 'class' to 'className' */}
        <div className="header-container">
          <h1 className="title">
            Task<span className="highlight">Buddy</span>
          </h1>
          <p className="tagline">Your friendly task manager</p>
        </div>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updatetask={updatetask} deleteTask={deleteTask} />
      <button className="clear-btn" onClick={clearTask}>Clear All Tasks</button>
    </div>
  );
}

export default App;
