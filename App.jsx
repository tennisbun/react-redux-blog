import { useState } from 'react'
import NavLogin from './components/NavLogin.jsx'
import HomeSection from './components/HomeSection.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  return (
    <div className="App">
      <NavLogin/>
      <HomeSection/>
      <Footer/>
    </div>
  )
}

export default App
