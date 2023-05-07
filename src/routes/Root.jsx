import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Products from './Products'
import styled from 'styled-components'
import AdminLogin from '../components/AdminLogin'
// import './App.css'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  `

function Root() {
  return (
    <Body>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <AdminLogin />
      <Footer />
    </Body>
  )
}

export default Root
