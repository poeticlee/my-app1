import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../ui-components/Header'
import Footer from '../ui-components/Footer'

export default function Default() {
  return (
    <div>
      
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}
