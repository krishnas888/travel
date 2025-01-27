import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePages from '../HomePage'



const index = () => {
  return (
    <BrowserRouter>
  
    <div style={{marginTop:"64px"}}>
        <Routes>
            <Route path="/" element={<HomePages/>} />
        </Routes>

    </div>
    </BrowserRouter>
  )
}

export default index
