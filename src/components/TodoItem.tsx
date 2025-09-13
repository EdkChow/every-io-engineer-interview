import { type FC } from 'react';

type TodoItemProps = {
  text: string;
  onMoveLeft: () => void;
  onMoveRight: () => void;
  canMoveLeft: boolean;
  canMoveRight: boolean;
}

export const TodoItem: FC<TodoItemProps> = ({ text, onMoveLeft, onMoveRight, canMoveLeft, canMoveRight }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center">
      <button
        onClick={onMoveLeft}
        disabled={!canMoveLeft}
        className="px-4 py-2 text-white rounded-lg bg-red-600 disabled:bg-red-300"
      >
        &larr;
      </button>
      <span className="text-lg">{text}</span>
      <button
        onClick={onMoveRight}
        disabled={!canMoveRight}
        className="px-4 py-2 text-white rounded-lg bg-green-600 disabled:bg-green-300"
      >
        &rarr;
      </button>
    </div>
  );
};
