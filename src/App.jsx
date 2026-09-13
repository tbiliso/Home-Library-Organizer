import { useState } from 'react';
import LogIn from './pages/Login.jsx'
function App() {

  const [font, setFont] = useState('HarryPotter')
  
  return (
    <div style={{fontFamily:font}}>
      <input type="checkbox"  className='fontToggle' onChange={(e)=>setFont(e.target.checked ? "HarryPotter":"Arial")}/>
      <LogIn />
    </div>
  );
}

export default App;