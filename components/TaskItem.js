import { useState } from "react";

const TaskItem = ({
  task,
  onMarkAsDone,
  onToggleExpand,
  isExpanded,
  onEditTask,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    onEditTask(editedTask);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditedTask({ ...task });
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <li className="border-b border-gray-200 mb-2 pb-2">
      <div className="flex justify-between items-center">
        {editing ? (
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="p-1 border border-gray-300 rounded"
          />
        ) : (
          <span
            className={`cursor-pointer ${task.done ? "line-through" : ""}`}
            onClick={() => onMarkAsDone(task.id)}
          >
            {task.title}
          </span>
        )}
        <div>
          {editing ? (
            <>
              <button className="text-green-500 mr-2" onClick={handleSave}>
                Save
              </button>
              <button className="text-gray-500" onClick={handleCancel}>
                Cancel
              </button>
            </>
          ) : (
            <button
              className="text-blue-500 hover:underline mr-2"
              onClick={handleEdit}
            >
              Edit
            </button>
          )}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => onToggleExpand(task.id)}
          >
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-2">
          {editing ? (
            <textarea
              name="description"
              value={editedTask.description}
              onChange={handleChange}
              className="p-1 border border-gray-300 rounded"
            />
          ) : (
            <p>{task.description}</p>
          )}
          <small className="text-gray-500">
            Last updated: {new Date(task.updatedAt).toLocaleString()}
          </small>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
