import { useState } from 'react';

export type TodoStatus = 'To Do' | 'In Progress' | 'Done';

export type Todo = {
  id: string;
  text: string;
  status: TodoStatus;
}

export const useTodos = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: window.crypto.randomUUID(), text, status: 'To Do' },
    ]);
  };

  const moveTodo = (id: string, newStatus: TodoStatus) => {
    setTodos((prevTodos) => {
      const todo = prevTodos.find((todo) => todo.id === id);
      const todos = prevTodos.filter((todo) => todo.id !== id);
      if (!todo) return prevTodos;

      return [
        ...todos,
        { id: todo.id, text: todo.text, status: newStatus },
      ];
    });
  };

  const findTodo = (id: string) => todos.find((todo) => todo.id === id);

  return { todos, addTodo, moveTodo, findTodo };
};
