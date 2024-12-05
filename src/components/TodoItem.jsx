import React, { useId, useState } from "react";
import { useTodoContext } from "../contexts/TodoContextProvider";

function TodoItem({ todo }) {
  const { toggleComplete, deleteTodo, updateTodo } = useTodoContext();
  let [isEditable, setIsEditable] = useState(false);
  let [newTodoTitle, setNewTodoTitle] = useState(todo.todoTitle);
  let [canSave, setCanSave] = useState(true);
  let uniqueId1 = useId();
  let uniqueId2 = useId();

  return (
    <div
      className={`${
        todo.completed ? "bg-green-300" : "bg-gray-300 "
      }  px-4 py-3 w-full rounded-md flex gap-4 items-center overflow-hidden`}
    >
      <input
        id={uniqueId1}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onChange={(e) => {
          if (!isEditable) {
            toggleComplete(todo.id);
          }
        }}
        type="checkbox"
        checked={todo.completed}
      />
      <input
        id={uniqueId2}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onChange={(e) => {
          if (!e.target.value.trim()) {
            setCanSave(false);
          } else {
            setCanSave(true);
          }
          setNewTodoTitle(e.target.value);
        }}
        disabled={!isEditable}
        type="text"
        className={`max-h-8 inline-block align-middle  w-5/6 ${
          isEditable ? "bg-white outline" : "bg-inherit"
        }  ${todo.completed ? "line-through" : ""}`}
        value={newTodoTitle}
      />

      <button
        onClick={(e) => {
          if (!todo.completed && isEditable && newTodoTitle.trim()) {
            updateTodo(todo.id, newTodoTitle);
            setIsEditable(false);
            return;
          } else {
            !todo.completed ? setIsEditable(true) : setIsEditable(false);
          }
        }}
        className={` rounded-md p-2 ${!canSave ? "bg-red-300 " : "bg-white"}`}
      >
        {isEditable ? " 💾 " : "🖍️"}
      </button>
      <button
        onClick={(e) => {
          deleteTodo(todo.id);
        }}
        className="bg-white rounded-md p-2"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
