import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import End from './components/End/End'
import ContactUsSections from './components/ContactUsSections/ContactUsSections'
// import Homepage from './pages/Homepage'
// import AboutUs from './pages/AboutUs'


function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      {/* <Homepage></Homepage> */}
      {/* <AboutUs></AboutUs> */}
      <ContactUsSections></ContactUsSections>
      <Footer></Footer>
      <End></End>
    </div>
  )
}

export default App