import { PrimitiveAtom, atom } from 'jotai';
import { Todo } from '../interface/todo.interface';
import { atomWithStorage } from 'jotai/utils';

export const todosAtom = atomWithStorage<Todo[]>('todos', []);

export const filterTypeAtom = atom('all');

export const filteredAtom = atom<Todo[]>((get: any): Todo[] => {
  const filter = get(filterTypeAtom);
  const todos = get(todosAtom);
  if (filter === 'all') return todos;
  else if (filter === 'completed')
    return todos.filter((atom: Todo) => atom.isDone);
  else return todos.filter((atom: Todo) => !atom.isDone);
});
