import React from 'react'
import LandingPage from './components/landingPage/LandingPage'
import AboutUs from './components/aboutUs/AboutUs';
import Services from './components/services/Services';

function Home() {
  return (
    <div className="bg-gray-200">
      <LandingPage />
      <AboutUs />
      <Services />
    </div>
  )
}

export default Home