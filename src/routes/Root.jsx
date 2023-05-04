import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Products from './Products'
import styled from 'styled-components'
// import './App.css'

const Body = styled.body`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
  height: 100%;
  `

function Root() {
  const [count, setCount] = useState(0)

  return (
    <Body>
      <Header />
      <Main>
        <Outlet />
      </Main>
      {/* <Products /> */}
      <Footer />
    </Body>
  )
}

export default Root
