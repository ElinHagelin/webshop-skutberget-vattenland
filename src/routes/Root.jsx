import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Products from './Products'
// import './App.css'

function Root() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Products />
      <Footer />
    </>
  )
}

export default Root
