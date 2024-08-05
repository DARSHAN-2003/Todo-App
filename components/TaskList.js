import TaskItem from "./TaskItem";

const TaskList = ({
  tasks,
  onMarkAsDone,
  onToggleExpand,
  expandedTaskId,
  onEditTask,
}) => (
  <ul className="list-none">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onMarkAsDone={onMarkAsDone}
        onToggleExpand={onToggleExpand}
        isExpanded={expandedTaskId === task.id}
        onEditTask={onEditTask}
      />
    ))}
  </ul>
);

export default TaskList;
