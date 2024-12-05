import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { TodoContextProvider } from "./contexts/TodoContextProvider";

createRoot(document.getElementById("root")).render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
