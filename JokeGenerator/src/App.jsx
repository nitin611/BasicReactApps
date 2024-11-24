import { useState } from 'react'
import Joke from './component/Joke'
import './App.css'

function App() {
  

  return (
    <div className='bg-green-600'>
      <h1>joke generator app</h1>
      <Joke/>
    </div>
  )
}

export default App
