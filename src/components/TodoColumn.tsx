import { type FC } from 'react';
import { TodoItem } from './TodoItem';
import { type Todo } from '../hooks/useTodos';

type TodoColumnProps = {
  title: string;
  items: Array<Todo>;
  onMoveLeft: (id: string) => void;
  onMoveRight: (id: string) => void;
}

export const TodoColumn: FC<TodoColumnProps> = ({ title, items, onMoveLeft, onMoveRight }) => {
  return (
    <div className="w-1/3 bg-gray-100 p-4 rounded-xl shadow-lg min-h-[300px]">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">{title}</h2>
      <div className="space-y-4">
        {items.map(({ id, status, text }) => (
          <TodoItem
            key={id}
            text={text}
            onMoveLeft={() => onMoveLeft(id)}
            onMoveRight={() => onMoveRight(id)}
            canMoveLeft={status !== 'To Do'}
            canMoveRight={status !== 'Done'}
          />
        ))}
      </div>
    </div>
  );
};
