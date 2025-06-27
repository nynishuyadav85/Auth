import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate()

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")

    const handleSignUp = async () => {
        try {
            const res = await axios.post("http://localhost:3000/signup", { userName, email, password }, { withCredentials: true })
            console.log(res)
            navigate('/profile')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <label>Name</label>
            <input
                value={userName}
                placeholder="Jhon"
                onChange={(e) => setUserName(e.target.value)}
            />
            <div>
                <label>Email</label>
                <input
                    value={email}
                    placeholder="Jhon"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password</label>
                <input
                    value={password}
                    placeholder="Jhon"
                    onChange={(e) => setpassword(e.target.value)}
                />
            </div>
            <div>
                <button onClick={handleSignUp}>SignUp</button>
            </div>
        </div>
    )
}

export default SignUp