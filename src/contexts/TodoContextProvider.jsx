import React, { useContext, useState, useEffect } from "react";
import { TodoContext } from "./TodoContext";

export const TodoContextProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("todoList"));
    if (localData) {
      setTodoList(localData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (todoTitle) => {
    setTodoList((prevTodoList) => {
      return [
        { id: Date.now(), todoTitle: todoTitle, completed: false },
        ...prevTodoList,
      ];
    });
  };

  const toggleComplete = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
          // return todo;
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const updateTodo = (id, todoTitle) => {
    setTodoList((prevTodoList) => {
      return prevTodoList.map((todo) => {
        if (todo.id === id) {
          todo.todoTitle = todoTitle;
        }
        return todo;
      });
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todoList: todoList,
        addTodo,
        toggleComplete,
        deleteTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => {
  return useContext(TodoContext);
};
