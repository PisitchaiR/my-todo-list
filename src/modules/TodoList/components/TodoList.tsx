import FilterTask from './FilterTask';
import InputTask from './InputTask';
import TaskList from './TaskList';

const TodoList = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <FilterTask />
      <InputTask />
      <TaskList />
    </div>
  );
};

export default TodoList;
