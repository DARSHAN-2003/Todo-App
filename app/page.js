"use client";

// app/page.js
import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const fetchTasks = async () => {
  const res = await fetch("http://localhost:3000/api/tasks");
  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
  }
  const tasks = await res.json();
  return tasks;
};

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  useEffect(() => {
    // Fetch tasks on initial render
    const loadTasks = async () => {
      try {
        const initialTasks = await fetchTasks();
        setTasks(initialTasks);
      } catch (error) {
        console.error(error);
        // Handle error state if needed
      }
    };

    loadTasks();
  }, []);

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddTask = (newTask) => {
    const updatedTasks = [
      ...tasks,
      {
        id: Date.now(), // Unique ID for the new task
        ...newTask,
        done: false,
        updatedAt: new Date().toISOString(),
      },
    ];
    setTasks(updatedTasks);
  };

  const handleMarkAsDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTaskExpand = (id) => {
    setExpandedTaskId(expandedTaskId === id ? null : id);
  };

  const handleEditTask = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id
        ? { ...task, ...editedTask, updatedAt: new Date().toISOString() }
        : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TaskForm onAddTask={handleAddTask} />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search tasks..."
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <TaskList
        tasks={filteredTasks}
        onMarkAsDone={handleMarkAsDone}
        onToggleExpand={toggleTaskExpand}
        expandedTaskId={expandedTaskId}
        onEditTask={handleEditTask}
      />
    </div>
  );
}
