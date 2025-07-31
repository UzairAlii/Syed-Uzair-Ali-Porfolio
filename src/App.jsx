import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TermsOfService from './components/TermsOfService'
import PrivacyPolicy from './components/PrivacyPolicy'

const Home = () => (
  <div>
    
    <LandingPage />
    <About />
    <Services />
    <Portfolio />
    <Contact />
 
  </div>
)

const App = () => {
  return (
    
    <div className='w-full'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/terms-of-services' element={<TermsOfService />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      </Routes>
         <Footer />
    </div>
  )
}

export default App
