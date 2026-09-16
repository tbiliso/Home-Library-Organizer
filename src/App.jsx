import { useState } from 'react';
import LogIn from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  const [font, setFont] = useState('HarryPotter')

  return (
    <div className='mainWrapper' style={{ fontFamily: font}}>
      <input type="checkbox" title='Change Font' className='fontToggle' onChange={(e) => setFont(e.target.checked ? "HarryPotter" : "Arial")} />

      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          {/* მთავარი გვერდი გადაამისამართოს login-ზე */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;