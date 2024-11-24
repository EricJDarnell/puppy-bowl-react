import React from 'react'
import AllPlayers from './components/AllPlayers'
import { useState } from 'react'
import { Routes, Route } from'react-router-dom'
import SinglePlayer from './components/SinglePlayer'
import AddPlayer from './components/AddPlayer'

function App() {
  const [puppyId, setPuppyId] = useState(null)
  

  return (
    <Routes>
      <Route path="/" element={<AllPlayers puppyId={puppyId} setPuppyId={setPuppyId}/>} />
      <Route path='/add-player' element={<AddPlayer />} />
      <Route path="/puppy" element={<SinglePlayer puppyId={puppyId} setPuppyId={setPuppyId}/>} />
    </Routes>
  )
}

export default App
