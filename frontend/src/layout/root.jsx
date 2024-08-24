import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import './Root.css'

const Root = () => {
  return (
    <div id="layout">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root