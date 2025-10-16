import React from 'react'
import { Alert } from '../components/Alert'
import { Hero } from '../components/Hero'
import { Navbar } from '../components/Navbar'
import { Body } from '../components/Body'
import Context from '../context/contextProvider'
import Footer from '../components/Footer'

export const HomePage = () => {
  return (
    <div>
      <Alert/>
       <Navbar/> 
      <Hero/>
      <Context/>
     <Footer/>
     
    </div>
  )
}
