import React from 'react';

const TodoList = ({ todos, setTodos }) => {
    
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 px-4 sm:px-6">
      <ol className="todo_list space-y-3">
        {todos && todos.length > 0 ? (
          todos?.map((item, index) => <Item key={index} item={item} setTodos={setTodos} />)
        ) : (
          <p className="text-center text-gray-500">Add your daily task here. And see how many you can achieve.</p>
        )}
      </ol>
    </div>
  );
};


function Item({ item, setTodos }) {
    const handleDelete = () => {
        setTodos((prevTodos) => {
          const updatedTodos = prevTodos.filter((todo) => todo.id !== item.id);
          
          // Update localStorage with the updated todos
          localStorage.setItem("todos", JSON.stringify(updatedTodos));
          
          return updatedTodos; // Return the updated state
        });
      };
      
  
    const completeTodo = () => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === item.id ? { ...todo, is_completed: !todo.is_completed } : todo
        )
      );
    };
  
    return (
      <li
        id={item?.id}
        className={`todo_item flex items-center justify-between p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out ${item.is_completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
        onClick={completeTodo}
      >
        <button className="flex items-center space-x-3 hover:text-blue-600 transition-colors duration-200">
          <svg className={`w-5 h-5 ${item.is_completed ? 'text-green-500' : 'text-blue-500'}`}>
            <circle cx="12" cy="12" r="9" fill="none" strokeWidth="2" stroke={item.is_completed ? 'green' : 'blue'} />
          </svg>
          <p className="text-lg font-medium">{item?.title}</p>
        </button>
        <div className="flex space-x-3">
          <button className="text-sm text-blue-500 hover:underline transition duration-150">
            Edit
            <svg className="w-4 h-4 inline-block ml-1">
              <path d="M4 10L10 4L14 10L8 16L4 10Z" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
          <button
            className="text-sm text-red-500 hover:underline transition duration-150"
            onClick={handleDelete}
          >
            Delete
            <svg className="w-4 h-4 inline-block ml-1">
              <path d="M6 6L12 12M12 6L6 12" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </li>
    );
  }
  

export default TodoList;
