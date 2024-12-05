import { createContext } from "react";
export const TodoContext = createContext({
  todoList: [
    {
      id: 1,
      todoTitle: "Iam a Todo 1",
      completed: false,
    },
    {
      id: 2,
      todoTitle: "Iam a Todo 2",
      completed: false,
    },
    {
      id: 3,
      todoTitle: "Iam a Todo 3",
      completed: false,
    },
  ],
  addTodo: (todoTitle) => {},
  toggleComplete: (id) => {},
  deleteTodo: (id) => {},
  updateTodo: (id, todoTitle) => {},
});
