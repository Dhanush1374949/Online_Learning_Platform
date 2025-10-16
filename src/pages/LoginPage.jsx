import React from 'react'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

  const navigate= useNavigate()

const onSubmit=()=>{

 navigate('/dashboard')

}

  return (
    <div>
    <h1>LoginPage</h1>
            <button  onClick={onSubmit} className='bg-transparent p-1 px-4  m-6 border-2  border-blue-800 rounded-2xl'>login now</button>


    </div>
  )
}
