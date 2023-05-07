import React from 'react'
import Homepage from './pages/Homepage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import CartShow from './components/CartShow/CartShow'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Layout from './Layout/Layout'
import { useState } from 'react'
import Blog from './pages/Blog'
import Special from './pages/Special'
import ProductCard from './pages/ProductCard'
import MyAccount from './pages/MyAccount'
import ForgottenPassword from './pages/ForgottenPassword'
import RegisterAccount from './pages/RegisterAccount'
import Compare from './pages/Compare'


function updateScroll(par) {
  if (par) {
    document.body.style.overflowY = 'auto';
  } else {
    document.body.style.overflowY = 'hidden';
  }
}
function App() {
  const [scroll, setScroll] = useState(true);
  updateScroll(scroll);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout setScroll = {setScroll}/>}>
            <Route index element={<Homepage />}></Route>
            <Route path='about' element={<AboutUs />} />
            <Route path='contact' element={<ContactUs />} />
            <Route path='blog' element={<Blog />} />
            <Route path='special' element={<Special />} />
            <Route path='product' element={<ProductCard />} />
            <Route path='account' element={<MyAccount />} />
            <Route path='account/forgotten-password' element={<ForgottenPassword />} />
            <Route path='account/register' element={<RegisterAccount />} />
            <Route path='compare' element={<Compare />} />






          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;