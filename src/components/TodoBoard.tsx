import { FC, FormEvent, useState } from "react";
import { TodoStatus, useTodos } from "../hooks/useTodos";
import { TodoColumn } from "./TodoColumn";

const columns: Array<TodoStatus> = ['To Do', 'In Progress', 'Done'];

export const TodoBoard: FC = () => {
  const { todos, addTodo, moveTodo, findTodo } = useTodos();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    
    if (newTodoText.trim()) {
      addTodo(newTodoText);
      setNewTodoText('');
    }
  };

  const moveLeft = (id: string) => {
    const todo = findTodo(id);
    if (!todo) return;

    const currentIndex = columns.indexOf(todo.status);
    if (currentIndex > 0) moveTodo(id, columns[currentIndex - 1]);
  };

  const moveRight = (id: string) => {
    const todo = findTodo(id);
    if (!todo) return;

    const currentIndex = columns.indexOf(todo.status);
    if (currentIndex < columns.length - 1) moveTodo(id, columns[currentIndex + 1]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex space-x-6">
        {columns.map((status) => (
          <TodoColumn
            key={status}
            title={status}
            items={todos.filter((todo) => todo.status === status)}
            onMoveLeft={moveLeft}
            onMoveRight={moveRight}
          />
        ))}
      </div>
      <form onSubmit={handleAddTodo} className="mt-8 flex justify-center">
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Add Task"
          className="p-2 border border-gray-300 rounded-lg w-1/3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button type="submit" className="ml-4 px-5 py-2 bg-blue-500 text-white rounded-lg text-xl font-bold">+</button>
      </form>
    </div>
  );
};
