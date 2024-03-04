import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })

    }
    return (
        <div>
            <h2>:Login</h2>
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='username' />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='password' />
            <input onClick={handleSubmit} type="submit" placeholder='Submit' />
        </div>
    )
}

export default Login
