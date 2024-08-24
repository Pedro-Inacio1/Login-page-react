import { FaUser, FaLock } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import '../CSS/Login.css'

const Login = () => {

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserpassword] = useState("")

  const submit = (e) => {
    e.preventDefault()

    const url = 'http://localhost:8000/GetUser'

    fetch(url , {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userEmail,
        senha: userPassword
      })
    })
      .then(response => {
        if (response.ok) {
          alert("Usuário autenticado com sucesso!")
        }
      })
      .catch(error => {
        alert("Não funcionou! " + error);
      })
  }

  return (
    <div id="content" className="content">
      <form id='form' onSubmit={submit}>
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