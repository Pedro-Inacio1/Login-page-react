import '../CSS/Register.css'

import { api } from '../Services/api'

import React, { useState } from "react"

const Register = () => {

    const [userName, setUserName] = useState("");
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSaveUser = async (e) => {
        e.preventDefault();

        const data = {
            nome: userName,
            email: email,
            senha: password
        }

        const response = await api.post("/Register", data);
        console.log(response.data)
    }

    return (
        <form onSubmit={handleSaveUser} id='form'>
            <div className='content'>
                <h1>Cadastro</h1>
                <div className="name">
                    <input type="text"
                        placeholder='Nome'
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div className="email">
                    <input type="email"
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setUserEmail(e.target.value)} />
                </div>

                <div className="password">
                    <input type="password"
                        placeholder='Senha'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="confirm-password"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)} />

                <div className="send">
                    <button type='submit' id='submit'>Enviar</button>
                </div>

            </div>
        </form >
    )
}

export default Register
