import React from 'react'
import Main from "./Main"
import Home from "./Home"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

export default function contact() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Main/>}></Route>
          <Route exact path='/Home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}