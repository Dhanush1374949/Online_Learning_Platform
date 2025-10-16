
import './App.css'

import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { LoginPage } from './pages/LoginPage'
import { PricePage } from './pages/PricePage'



function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/price' element={<PricePage/>}/>
      
      
    

    </Routes>
    
    </BrowserRouter>
      
   
  )
}

export default App
