import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm.js";
import TaskTable from "./components/TaskTable.js";
import { Toaster, toast } from "react-hot-toast";

function App() {
  const [taskItem, setTaskItem] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) setTaskItem(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItem));
  }, [taskItem]);

  function createNewTask(task) {
    const taskObj = { description: task, done: false };
    if (taskItem.find((t) => t.description === task)) {
      toast.error("La tarea ya existe.");
      return;
    }
    setTaskItem([...taskItem, taskObj]);
    toast.success("Se ha añadido una nueva tarea.");
  }

  function toggleTask(task) {
    setTaskItem(
      taskItem.map((t) =>
        t.description === task.description ? { ...t, done: !t.done } : t
      )
    );
    toast.success("Estado actualizado.");
  }

  function deleteDoneTask() {
    setTaskItem(taskItem.filter((task) => !task.done));
    toast.success("Tarea eliminda.");
  }

  return (
    <main className="text-white vh-100 p-4">
      <div className="container mt-4 col-md-4">
        <TaskForm createTask={createNewTask} deleteTask={deleteDoneTask} />
        <TaskTable tasks={taskItem} toggleTask={toggleTask} />
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </main>
  );
}

export default App;
