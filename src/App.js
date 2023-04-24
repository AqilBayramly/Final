import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import End from './components/End/End'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartShow from './components/CartShow/CartShow'
import ContactUsSections from './components/ContactUsSections/ContactUsSections'
import AboutUs from './pages/AboutUs'


function App() {
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Header/>}></Route>
          <Route index element={<Homepage/>}></Route>

        </Route>
      </Routes>
      
      </BrowserRouter> */}




      <Header/>
      {/* <CartShow/> */}
      <Navbar/>
      <Homepage/>
      {/* <AboutUs/> */}
      {/* <ContactUsSections/> */}
      <Footer/>
      <End/>
    </div>
  )
}

export default App