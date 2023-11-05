import { Form, Input } from 'antd';
import { Todo } from '../interface/todo.interface';
import { todosAtom } from '../store/Todos';
import { useSetAtom } from 'jotai';

const InputTask = () => {
  const setTodos = useSetAtom(todosAtom);

  const onFinish = (values: Todo) => {
    setTodos((todos) => [
      ...todos,
      {
        id: crypto.randomUUID(),
        title: values.title,
        isDone: false,
      },
    ]);
  };

  return (
    <Form onFinish={onFinish} className="w-full">
      <Form.Item name="title">
        <Input size="large" type="text" placeholder="Type..." />
      </Form.Item>
    </Form>
  );
};

export default InputTask;
