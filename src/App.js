import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer/Footer'
import End from './components/End/End'


function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Footer></Footer>
      <End></End>
    </div>
  )
}

export default App