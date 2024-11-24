import React from 'react'

 const Button = (props) => {

  return (
    <button
    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    onClick={props.callApi}
  >
    Click to Generate a Joke
  </button>
  
  )
}

export default Button
