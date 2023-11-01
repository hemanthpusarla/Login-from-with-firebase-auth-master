import React from 'react'
import Login from './pages/login'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from './pages/signup'
import Home from './pages/home'

const App = () => {
  return (
     <div>
     <BrowserRouter>
     <Routes>
      <Route path ="/" element={<Login></Login>}></Route>
      <Route path ="/signup" element={<Signup></Signup>}></Route>
      <Route path ="/home" element={<Home></Home>}></Route>
     </Routes>
     </BrowserRouter>
     </div>
       
  )
}
  
export default App
