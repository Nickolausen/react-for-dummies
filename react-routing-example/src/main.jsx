import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Shop from './pages/Shop.jsx'
import NotFound from './pages/NotFound.jsx'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)