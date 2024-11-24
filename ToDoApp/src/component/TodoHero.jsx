import React from 'react';

const TodoHero = ({ todos_completed, total_todos }) => {
  return (
    <div className="w-full bg-blue-50 p-6 rounded-lg shadow-md flex flex-col items-center space-y-4">
      <div className="text-center">
        <p className="text-xl font-bold text-gray-700">Task Done</p>
        <p className="text-sm text-gray-500">Keep it up</p>
      </div>
      <div className="flex justify-center text-lg font-medium text-blue-600">
        {total_todos === 0 ? "No tasks yet" : `${((todos_completed / total_todos) * 100).toFixed(1)}% completed`}
      </div>
    </div>
  );
};

export default TodoHero;
