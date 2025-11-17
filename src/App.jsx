import React from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Matrix from './components/Matrix'
import Authority from './components/Authority'
import HowItWorks from './components/HowItWorks'
import SocialProof from './components/SocialProof'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import SEO from './components/SEO'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO />
      <Hero />
      <Problem />
      <Matrix />
      <Authority />
      <HowItWorks />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
