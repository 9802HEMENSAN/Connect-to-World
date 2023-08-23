import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SavedFeed from '../pages/SavedFeed'

const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/saved' element={<SavedFeed/>}></Route>
            <Route path="/*" element={<h1>Not Found Page</h1>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes