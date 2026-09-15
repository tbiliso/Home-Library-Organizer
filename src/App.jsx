import { useState } from 'react';
import LogIn from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  const [font, setFont] = useState('HarryPotter')
  
  return (
    <div style={{fontFamily:font, backgroundColor: 'rgb(203, 209, 146)'} }>
      <input type="checkbox" title='Change Font'  className='fontToggle' onChange={(e)=>setFont(e.target.checked ? "HarryPotter":"Arial")}/>
      <LogIn />
      <Register />
    </div>
  );
}

export default App;