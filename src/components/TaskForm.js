import { useState } from "react";

export default function TaskForm({ createTask, deleteTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    setTask("");
  };

  function handleDelete() {
    if (window.confirm("¿Estás seguro de eliminar las tareas hechas?")) {
      deleteTask();
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="row mb-3">
        <div className="col-8">
          <input
            className="form-control"
            type="text"
            placeholder="Enter a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="col-4">
          <button className="btn btn-success">Save task</button>
        </div>
      </form>
      <div className="d-flex justify-content-end">
        {/* <div className=""> */}
          <button className="btn btn-danger" onClick={() => handleDelete()}>
            Delete done Tasks
          </button>
        {/* </div> */}
      </div>
    </>
  );
}
