import React, { useId, useState } from "react";
import { useTodoContext } from "../contexts/TodoContextProvider";

function TodoForm() {
  let [todoInput, setTodoInput] = useState("");
  let { addTodo } = useTodoContext();
  let uniqueId4 = useId();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (todoInput.trim()) {
          addTodo(todoInput.trim());
          setTodoInput("");
        }
      }}
      className="xl:w-2/4 lg:w-3/4 md:w-11/12 sm:w-screen w-screen px-8  flex"
    >
      <input
        id={uniqueId4}
        onChange={(e) => {
          setTodoInput(e.target.value);
        }}
        className="w-full px-4 py-3 rounded-l-md bg-gray-600 text-white outline-none"
        type="text"
        value={todoInput}
        placeholder="Write a todo here"
      />
      <button className="bg-green-600 px-5 rounded-r-md text-white">Add</button>
    </form>
  );
}

export default TodoForm;
