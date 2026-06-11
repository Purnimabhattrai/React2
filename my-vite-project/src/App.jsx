import { useState } from 'react'
import './App.css'

let name="Jyoti";
function App() {
  
  return (
        <>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </nav>
        <h1>Hello {name}</h1>
        </>
  )
}

export default App
