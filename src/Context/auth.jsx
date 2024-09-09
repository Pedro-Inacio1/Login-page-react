import React, { createContext, useState } from "react";

import { api } from "../Services/api";

const Context = createContext();

function AuthProvider({ children }) {

    const [ Authenticated, setAuthenticated] = useState(false)

    async function HandleLogin(data) {
        try {
            const { data: { token } } = await api.post('/GetUser', data)
    
            localStorage.setItem('token', JSON.stringify(token))
            api.defaults.headers['x-acess-token'] = token;
            setAuthenticated(true);
            return true;
        }
        catch(error) {
            console.error('Erro na autenticação :' + error)
            setAuthenticated(false);
            return false;
        }

        }

    return (
        <Context.Provider value={{ Authenticated, HandleLogin }}>
            { children }
        </Context.Provider>
    )
}

export { Context, AuthProvider };




// import { createContext, useEffect, useState } from "react";
// import { api } from "../Services/api";

// export const AuthContext = createContext()

// export const AuthProvider = ({children}) => {

//     const [user, setUser] = useState(null)

//     useEffect(() => {
//         const loadStoreData = async() => {
    
//             const storageUser = localStorage.getItem("@Auth:user")
//             const storageToken = localStorage.getItem("@Auth:token")
    
//             if(storageUser && storageToken) {
//                 setUser(storageUser)
//             }
//         }
//         loadStoreData();
//     }, [])


    
//     const SignIn = async({email, senha}) => {
//         const response = await api.post("/GetUser", {
//             email,
//             senha
//         });

//         if(response.data.error) {
//             alert(response.data.error)
//         }
//         else {
//             setUser(response.data)
//             api.defaults.headers.common[
//                 "Authorization"
//             ]
//             localStorage.setItem("@Auth:token", response.data.token)
//             localStorage.setItem("@Auth:user", response.data.user)
//         }
       
//     }


//     return(
//         <AuthContext.Provider value={{
//             user,
//             signed : !!user,
//             SignIn
//         }} >
//             {children}
//         </AuthContext.Provider>
//     )
// }