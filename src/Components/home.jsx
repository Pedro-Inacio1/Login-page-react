import React, { useEffect } from 'react'
import '../CSS/Home.css'
import { useAuth } from '../Context/auth'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { user } = useAuth();

  console.log(user)

  const navigate = useNavigate(); 

  if(!user) {
    useEffect(() => {
      navigate('/Login')
    })
  }
  else {
      return (
      <div className='Home'>
        <h1>Bem vindo de volta, {user.name}</h1>
    </div>
  )
}

}

export default Home
