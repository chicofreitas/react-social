import { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import './App.css'
import Feed from './pages/Feed'
import Login from './pages/Login'
import User from './pages/NotFound/User'
import Profile from './pages/Profile'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login title="Login" />}></Route>
        <Route path="/feed" element={<Feed title="Feed" />}></Route>
        <Route path="/profile" element={<Profile title="Profile" />}></Route>
        <Route path='/unotfound' element={<User />}></Route>
      </Routes>
    </div>
  )
}

export default App
