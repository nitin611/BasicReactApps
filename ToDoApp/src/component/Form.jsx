import React from 'react';

const Form = ({ todos,setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Fix: Added parentheses
    const value = e.target.todo.value.trim(); // Trim to remove leading/trailing spaces

    // Validate input
    if (!value) {
      alert("Task cannot be empty!");
      return;
    }

    // Update todos state
    const newTodo = {
        title: value,
        id: self.crypto.randomUUID(),
        is_completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      // Store updated todo list in local storage
      const updatedTodoList = JSON.stringify([...todos, newTodo]);
      localStorage.setItem("todos", updatedTodoList);
     

    // Reset the form
    e.target.reset();
  };

  return (
    <form className="flex flex-col gap-4 p-4 w-full max-w-md mx-auto bg-white rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <label htmlFor="todo" className="text-lg font-semibold text-gray-700">
        Add Task:
      </label>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="Write your tasks here"
        className="border-2 border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        <span>Submit</span>
      </button>
    </form>
  );
};

export default Form;
