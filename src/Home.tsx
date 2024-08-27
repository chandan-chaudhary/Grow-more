import React from 'react'
import LandingPage from './components/landingPage/LandingPage'
import AboutUs from './components/aboutUs/AboutUs';
import Services from './components/services/Services';
import Teams from './components/teams/Teams';
import Merchant from './components/merchant_client/Merchant';
import OperationalState from './components/operationalStates/OperationalState';

function Home() {
  return (
    <div className="bg-gray-100">
      <LandingPage />
      <AboutUs />
      <Services />
      <Teams />
      <Merchant />
      <OperationalState />
    </div>
  )
}

export default Home