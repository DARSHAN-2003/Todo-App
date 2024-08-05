import { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="mb-2 p-2 border border-gray-300 rounded w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
