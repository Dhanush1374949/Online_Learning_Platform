import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='bg-blue-500 text-white p-4 py-4 font-bold flex items-center justify-between'>
        <div>
          <Link to={'/'}>
          <p>Courser</p>
          </Link>
          </div>

        <div>
            <ul className='flex gap-15 '>
                <li><a href='#'>Home</a></li>
                <Link to={'/price'}>
                <li>Price</li>
                </Link>
                <Link to='/about'>
                 <li>About</li>
                </Link>
                 <Link to='/contact'>
                 <li>Contact</li>
                </Link>
            </ul>
        </div>
        <div>
          <Link to={'/login'}>
            <button className='bg-transparent p-1 px-4  border-2 border-white rounded-2xl'>login</button>
          </Link>
        </div>
    </div>
  )
}
