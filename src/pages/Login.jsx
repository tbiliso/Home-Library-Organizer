import '../css/Login.css'
import { useState } from 'react'
function LogIn() {
    //user/password states
    const [password, setPassword] = useState('')
    const [user, setUser] = useState('')
    //onSubmit function
    const handleSubmit = (e) =>{
        e.preventDefault()
        //login validation
        if(!user.trim() || !password.trim()){
            alert("user or password is empty")
            return;
        }
        console.log(user, password)
    }
    return (
        <div className="login">
            <h1 className='login-title'>Home Library <br /> Organizer</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-input">
                    <input type="text" placeholder="User Name" id="login-username" onChange={(e)=>setUser(e.target.value)}/>
                    <input type="password" placeholder="Password" id="login-password" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button type="submit" className="login-submit">Log In</button>
            </form>
            <div className="login-links">
                <a href="/register">SignUp</a>
                <a href="/password-recovery">Forgot Password?</a>
            </div>
        </div>
    )
}

export default LogIn