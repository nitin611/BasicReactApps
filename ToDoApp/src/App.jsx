import { useState,useEffect } from "react";
import Header from "./component/Header";
import TodoHero from "./component/TodoHero";
import Form from "./component/Form";
import TodoList from "./component/TodoList";


function App() {
  const [todos, setTodos] = useState([
    {
      title: "hi",
      id: self.crypto.randomUUID(),
      is_completed: false,
    },
    {
      title: "new todo",
      id: self.crypto.randomUUID(),
      is_completed: true,
    },
  ]);

 useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  const todosCompleted = todos.filter((todo) => todo.is_completed).length;
  const totalTodos = todos.length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4 space-y-6">
      <Header />
      {/* Pass calculated values */}
      <TodoHero todos_completed={todosCompleted} total_todos={totalTodos} />
      <Form  todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
