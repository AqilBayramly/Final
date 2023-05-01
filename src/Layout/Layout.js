import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from "react-router-dom";
import End from '../components/End/End';
import TopHeader from '../components/TopHeader/TopHeader';

function Layout(props) {
    const { setScroll } = props;
    return (
        <>
            <TopHeader />
            <Header setScroll={setScroll} />
            <Navbar />
            <Outlet />
            <Footer />
            <End />
        </>
    )
}

export default Layout