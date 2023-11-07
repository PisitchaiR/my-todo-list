import { Button, Form, Input } from 'antd';
import { Todo } from '../interface/todo.interface';
import { todosAtom } from '../store/Todos';
import { useSetAtom } from 'jotai';
import { useForm } from 'antd/es/form/Form';

const InputTask = () => {
  const setTodos = useSetAtom(todosAtom);
  const [form] = Form.useForm();

  const onFinish = (values: Todo) => {
    setTodos((todos) => [
      ...todos,
      {
        id: crypto.randomUUID(),
        title: values.title,
        isDone: false,
      },
    ]);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} className="w-full flex gap-5">
      <Form.Item
        style={{
          flexGrow: 1,
        }}
        name="title"
      >
        <Input size="large" type="text" placeholder="Type..." />
      </Form.Item>
      <Button htmlType="submit" className="hidden" size="large">
        add
      </Button>
    </Form>
  );
};

export default InputTask;
