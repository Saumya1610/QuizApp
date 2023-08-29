import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Instruction from './Instruction'
import Quiz from './Quiz'
import NavBar from './Navbar'
import './quiz.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"

function App() {
  const [count, setCount] = useState(0);

  return (
    
    <div >
        <h1 className="neonText">Welcome to the Quiz!!</h1>
        <br/>
      <Instruction/>
    </div>
  )
}

export default App
