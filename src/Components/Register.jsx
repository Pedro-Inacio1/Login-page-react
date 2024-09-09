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
            nome : userName,
            email : email ,
            senha : password
        }

        const response = await api.post("/Register", data);
        console.log(response.data)
    }

    return (
        <form onSubmit={handleSaveUser} id='form'>
            <div className='content'>
                <h1>Cadastro</h1>
                <div className="name">
                    <label> Nome completo:
                        <input type="text"
                            value={userName}
                            onChange={(e) =>
                                setUserName(e.target.value)} />
                    </label>
                </div>
                <div className="email">
                    <label id='email'> Email:
                        <input type="email"
                            value={email}
                            onChange={(e) => setUserEmail(e.target.value)} />
                    </label>
                </div>
                <div className="password">
                    <label id='pass'> Senha:
                        <input type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </label>
                </div>
                <div className="confirm-password">
                    <label> Repita a senha:
                        <input type="password"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)} />
                    </label>
                </div>
                <div className="send">
                    <button type='submit' id='submit'>Enviar</button>
                </div>
            </div>
        </form>
    )

}
export default Register
