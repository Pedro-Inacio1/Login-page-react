import React, { useState } from 'react';
import { useAuth } from '../Context/auth';
import { useNavigate, Link } from 'react-router-dom';
import '../CSS/Login.css'

const Login = () => {
    const { setUser } = useAuth();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/GetUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            if (!response.ok) {
                throw new Error('Credenciais inválidas!');
            }

            const data = await response.json();
            setUser(data);

            const token = data.token;
            localStorage.setItem('token', token);
            alert('Usuário autenticado com sucesso!');
            navigate('/Home')

            setError('');
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className='contentLogin'>
            <h2 id='title'>Login</h2>
            <form id='formLogin' onSubmit={handleSubmit}>
                <div className="inputs">
                    <input
                        className='inp-email'
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />
                    <button type="submit" id='submitLogin'>Entrar</button>
                    </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="options">
                <Link to={'/Register'}>Cadastre-se</Link>
                <Link to={'/Recover'}>Esqueceu a senha?</Link>
            </div>
        </div >
    );
};

export default Login;