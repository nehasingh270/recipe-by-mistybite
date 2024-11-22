import React from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Single from './pages/Single'
import Footer from './pages/Footer'
import About from './pages/About'
import Services from './pages/Services'

function App() {
  return (
    <>
     <BrowserRouter>
     <div className='mb-[70px]'>
     <Navbar/>
     </div>
      <Routes>
        <Route  path='/' element ={<Home/>} />
        <Route path='/single' element ={<Single/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      {/* <Footer/> */}
     </BrowserRouter> 
    </>
  )
}

export default App



