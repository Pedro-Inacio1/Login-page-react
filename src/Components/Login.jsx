import React, { useState } from 'react';
import { useAuth } from '../Context/auth';
import { useNavigate } from 'react-router-dom';

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
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
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
                <button type="submit">Entrar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;