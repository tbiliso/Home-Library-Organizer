import { useState } from "react";
import '../css/register.css'
function Register() {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rptPass, setRptPass] = useState('')
    const [errors, seterrors] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        rptPass: ''
    })
    const subForm = (e) => {
        e.preventDefault()

        const newErrors = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            rptPass: ''
        }
        if (!fname.trim()) {
            newErrors.fname = ('გთხოვთ შეიყვანოთ სახელი');
        }

        if (!lname.trim()) {
            newErrors.lname = ('გთხოვთ შეიყვანოთ გვარი');
        }
        if (!email.trim()) {
            newErrors.email = ('გთხოვთ შეიყვანოთ ელ-ფოსტა');
        }
        if (!password.trim()) {
            newErrors.password = ('გთხოვთ შეიყვანოთ პაროლი');
        }
        if (!rptPass.trim()) {
            newErrors.rptPass = ('გთხოვთ გაიმეოროთ პაროლი')
        } else if (password !== rptPass) {
            newErrors.rptPass = 'პაროლები არ ემთხვევა';
        }
        seterrors(newErrors);
        if (
            newErrors.fname ||
            newErrors.lname ||
            newErrors.email ||
            newErrors.password ||
            newErrors.rptPass
        ) {
            return
        }
        console.log(fname, lname, email, password, rptPass);
    }
    return (
        <form onSubmit={subForm} className="regForm">
            <input type="text"
                value={fname}
                placeholder="First name"
                onChange={(e) => setFname(e.target.value)} />
            <p className="errorMsg">{errors.fname}</p>
            <input type="text" value={lname} placeholder="Last name" onChange={(e) => setLname(e.target.value)} />
            <p className="errorMsg">{errors.lname}</p>
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <p className="errorMsg">{errors.email}</p>
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <p className="errorMsg">{errors.password}</p>
            <input type="password" value={rptPass} placeholder="Repeat password" onChange={(e) => setRptPass(e.target.value)} />
            <p className="errorMsg">{errors.rptPass}</p>
            <button type="submit">Register</button>
        </form>
    )
}

export default Register