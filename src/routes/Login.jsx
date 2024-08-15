import { FaUser, FaLock } from 'react-icons/fa'

import { useState } from 'react'

import '../Login.css'

const Login = () => {

  const [userName, setUserName] = useState("")
  const [userPassword, setUserpassword] = useState("")

  const submit = (e) => {
    e.preventDefault()

    fetch(`/GetUser?email=${encodeURIComponent(userName)}&password=${encodeURIComponent(userPassword)}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        alert("Trouxe os dados: " + JSON.stringify(data));
      })
      .catch(error => {
        alert("Não trouxe os dados: " + error);
      })
  }

  return (
    <div id="content" className="content">
      <form id='form' onSubmit={submit}>
        <h1>Login Page</h1>
        <div id="inp-email" className="inp-email">
          <input type="email" placeholder="Digite seu email" id="email" onChange={(e) => setUserName(e.target.value)}></input>
          <FaUser className='icon' />
        </div>
        <div id='inp-password' className='inp-password'>
          <input type="password" placeholder="Digite sua senha" id="password" onChange={(e) => setUserpassword(e.target.value)}></input>
          <FaLock className='icon' />
        </div>
        <div className='submit'>
          <button type='submit' id='submit'>Enviar</button>
        </div>
        <a href='#' id='forgot-password'>Esqueceu a senha?</a>

        <div>
          <button id='register'>Não tem uma conta? Cadastre-se</button>
        </div>
      </form>
    </div>
  )
}

export default Login