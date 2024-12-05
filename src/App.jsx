import React, { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { useTodoContext } from "./contexts/TodoContextProvider";

function App() {
  let { todoList } = useTodoContext();

  return (
    <div className="xl:p-20 lg:p-10 md:px-5 sm:px-2 sm:py:20 py-10 flex flex-col justify-center items-center gap-10 ">
      <h1 className="text-white font-bold text-2xl w-full text-center">
        Manage Your Todo's
      </h1>

      <TodoForm />

      <div className="xl:w-2/4 lg:w-3/4 md:w-11/12 sm:w-screen w-screen px-8 flex flex-col gap-4 justify-center items-center">
        {todoList?.length > 0 ? (
          todoList.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        ) : (
          <>
            <p className="text-xl text-white text-center">"No Todo's Found"</p>
            <p className="text-xl text-white text-center">
              Create a Todo ✍️ now
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
