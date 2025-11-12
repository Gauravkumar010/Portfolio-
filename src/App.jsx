import { useState } from 'react'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Skills from './Component/Skills'
import Projects from './Component/Project'
import { Toaster } from 'react-hot-toast'
import Contact from './Component/Contact'
import Footer from './Component/Footer'


function App() {


  return (
    <>
    <Navbar/>
    <Hero/>
   <About/>
   <Skills/>
   <Projects/>
    <Toaster position="top-center" reverseOrder={false} />
    <Contact/>
    <Footer/>
  </>
  )
}

export default App
