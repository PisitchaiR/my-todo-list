'use client';

import { a, useTransition } from '@react-spring/web';
import { useAtom, useSetAtom } from 'jotai';
import { filteredAtom, todosAtom } from '../store/Todos';
import { CloseOutlined } from '@ant-design/icons';
import { Button, Checkbox } from 'antd';
import { Todo } from '../interface/todo.interface';

const TaskList = () => {
  const [todos] = useAtom(filteredAtom);
  const setTodos = useSetAtom(todosAtom);

  const transitions = useTransition(todos, {
    key: (item: Todo) => item.id,
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 40 },
    leave: { opacity: 0, height: 0 },
    config: { duration: 200 },
  });

  const checkTaks = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      }),
    );
  };

  const removeTask = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="w-full">
      {transitions((style, task) => (
        <a.div
          style={{
            ...style,
            gap: '10px',
          }}
          className="w-full flex items-center"
        >
          <Checkbox
            checked={task.isDone}
            onChange={() => checkTaks(task.id as string)}
          />
          <div
            style={{
              textDecoration: task.isDone ? 'line-through' : 'none',
              flexGrow: 1,
            }}
          >
            {task.title}
          </div>
          <Button
            onClick={() => removeTask(task.id as string)}
            htmlType="button"
            type="text"
            icon={<CloseOutlined />}
          />
        </a.div>
      ))}
    </div>
  );
};

export default TaskList;
