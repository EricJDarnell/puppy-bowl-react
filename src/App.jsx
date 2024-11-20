import React from 'react'
import AllPlayers from './components/AllPlayers'
import { useState } from 'react'
import { Routes, Route } from'react-router-dom'
import SinglePlayer from './components/SinglePlayer'

function App() {
  const [puppyId, setPuppyId] = useState(null)
  

  return (
    <Routes>
      <Route path="/" element={<AllPlayers setPuppyId={setPuppyId}/>} />
      <Route path="/puppy" element={<SinglePlayer puppyId={puppyId}/>} />
    </Routes>
  )
}

export default App
