import React from 'react'
import Navigation from './components/Navigation'
import { Routes } from 'react-router'
import { Route } from 'react-router-dom'
import Home from './components/Home'
import RecommendPage from './components/RecommendPage'
import Footer from './components/Footer'

function App() {
  return (
    <div className='h-screen w-full  bg-zinc-950 overflow-auto'>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommend" element={<RecommendPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App