import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './Components/home.jsx'
import Login from './Components/Login.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import Register from './Components/Register.jsx'
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"
import RecoverPassword from "./Components/RecoverPassword.jsx"
import { AuthProvider } from "./Context/auth.jsx"

const Elementz = () => {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Login />}></Route>
                        <Route path='/Login' element={<Login />}></Route>
                        <Route path='/Register' element={<Register />}></Route>
                        <Route path='/Home' element={<Home />}></Route>
                        <Route path="/Recover" element={<RecoverPassword />}></Route>
                        <Route path="*" element={<ErrorPage />}></Route>
                    </Routes>
                    <Footer />
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}

export default Elementz
