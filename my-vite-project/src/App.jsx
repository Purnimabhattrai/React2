import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import './App.css'
import Purnima from './Components/Purnima.jsx'

let name="Purnima";
function App() {
  
  return (
      <>
        <Navbar title="TextutilsP" about="AboutText"/>
        <Purnima/>
      </>
  );
          }
  


export default App
