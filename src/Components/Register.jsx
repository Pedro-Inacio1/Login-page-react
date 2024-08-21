import '../CSS/Register.css'

import React, { useState } from "react"

const Register = () => {

    const [userName, setUserName] = useState("");
    const [email, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
 
    async function handleSubmit(e) {
        e.preventDefault();

        if (!userName || !email || !password || !repeatPassword) {
            alert("preencha todos os campos corretamente!")
            return;
        }
        
        if (password !== repeatPassword) {
            alert("As senhas não coincidem!")
            return;
        }

        const url = 'http://localhost:8000/Register';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nome: userName,
                    email: email,
                    senha: password
                })
            })
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
            alert("cadastro realizado com sucesso!");
        }
        catch(error) {
            alert('Não foi possível realizar o cadastro!' + error.message)
        }

    }

    return (
        <form onSubmit={handleSubmit} id='form'>
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
