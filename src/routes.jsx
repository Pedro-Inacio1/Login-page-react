import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from './Components/home.jsx'
import Contact from './Components/contact.jsx'
import Login from './Components/Login.jsx'
import App from './Components/App.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import AboutUs from './Components/AboutUs.jsx'
import Register from './Components/Register.jsx'
import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx"

import { AuthProvider } from "./Context/auth.jsx"

const Elementz = () => {
    return (
        <>
            <AuthProvider>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Login />}></Route>
                        <Route path='/Login' element={<Login />}></Route>
                        <Route path='/Register' element={<Register />}></Route>
                        <Route path='/About' element={<AboutUs />}></Route>
                        <Route path='/Home' element={<Home />}></Route>
                        <Route path='/App' element={<App />}></Route>
                        <Route path='/Contact' element={<Contact />}></Route>
                        <Route path="*" element={<ErrorPage />}></Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </>
    )
}

export default Elementz
