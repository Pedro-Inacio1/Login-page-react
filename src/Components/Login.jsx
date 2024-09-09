import { FaUser, FaLock } from 'react-icons/fa'
import '../CSS/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import { useContext, useState } from 'react'

import { Context } from '../Context/auth'

const Login = () => {

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserpassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [sucessMessage, setSucessMessage] = useState("")

  const { HandleLogin } = useContext(Context);
  const navigate = useNavigate();

  const HandleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email: userEmail,
      senha: userPassword
    }
    const sucess = await HandleLogin(data);

    if(!sucess) {
      setErrorMessage('Falha na autenticação. Verifique as suas credenciais')
    }
    else {
      setErrorMessage('');
      setSucessMessage('Login bem-sucedido!')
      navigate('/Home');
    }
  }

  return (
    <div id="content" className="content">
      <form id='form' onSubmit={HandleSubmit}>
        <h1>Login Page</h1>
        <div id="inp-email" className="inp-email">
          <input type="email" placeholder="Digite seu email" id="email" onChange={(e) => setUserEmail(e.target.value)}></input>
          <FaUser className='icon' />
        </div>
        <div id='inp-password' className='inp-password'>
          <input type="password" placeholder="Digite sua senha" id="password" onChange={(e) => setUserpassword(e.target.value)}></input>
          <FaLock className='icon' />
        </div>
        <div className='submit'>
          <button type='submit' id='submit'>Enviar</button>
          {errorMessage && <p>{errorMessage}</p>}
          {sucessMessage && <p>{sucessMessage}</p>}
        </div>
        <div className="forget-password">
          <Link to="/Register" /> Esqueceu a senha?<Link />
        </div>
        <div className="registerAcc">
          <Link to="/Register"> Não tem uma conta? Cadastre-se </Link>
        </div>
      </form>
    </div>
  )
}


export default Login