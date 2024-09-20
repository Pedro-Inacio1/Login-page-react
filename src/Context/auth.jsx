import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const login = async (email, senha) => {
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
            setError(null); 
        } catch (err) {
            setError(err.message);
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};