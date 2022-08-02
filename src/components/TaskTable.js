export default function TaskTable({ tasks, toggleTask }) {
  return (
    <table className="table table-dark table-striped table-bordered border-secondary mt-3">
      <thead>
        <tr>
          <th className="text-center">Tareas</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.description}>
            <td className="d-flex justify-content-between">
              {task.description}
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
