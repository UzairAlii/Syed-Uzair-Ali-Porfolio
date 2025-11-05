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
import Testimonials from './components/Testimonials'
import { Images } from './assets/assets'

const Home = () => (
  <div className="relative">

     <img
        src={Images.gredientBg}
        className="fixed inset-0 w-full h-full object-cover -z-1 opacity-50 pointer-events-none"
      />
    
    <LandingPage />
    <About />
    <Services />
    <Portfolio />
    <Testimonials />
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
