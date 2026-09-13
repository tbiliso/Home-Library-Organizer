import '../css/Login.css'
function LogIn() {
    return (
        <div className="login">
            <h1 className='login-title'>Home Library <br /> Organizer</h1>
            <form className="login-form">
                <div className="login-input">
                    <input type="text" placeholder="User Name" id="login-username" />
                    <input type="password" placeholder="Password" id="login-password" />
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