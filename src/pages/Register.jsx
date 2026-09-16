import { useState } from "react";
import '../css/register.css'
function Register() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rptPass, setRptPass] = useState('')
    const subForm =(e)=>{
        e.preventDefault()
        if(!fname.trim() || !lname.trim() || !email.trim() || !password.trim() || !rptPass.trim() || password.trim() !== rptPass.trim()){
            return
        }
        console.log(fname, lname, email, password, rptPass)
    }
    return (
        <form onSubmit={subForm} className="regForm">
            <input type="text" 
                    value={fname}
                    placeholder="First name" 
                    onChange={(e) => setFname(e.target.value)} />
            <input type="text" value={lname} placeholder="Last name" onChange={(e) => setLname(e.target.value)} />
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" value={rptPass} placeholder="Repeat password" onChange={(e) => setRptPass(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register