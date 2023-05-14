import { Outlet } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import AdminLogin from '../components/AdminLogin'
import { productsAtom } from '../data/atoms/productsAtom'
import { getProducts } from '../utils/ajax/ajaxProducts'


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

  const [products, setProducts] = useRecoilState(productsAtom)

  async function fetchProducts() {
    const productsFromAPI = await getProducts()
    setProducts(productsFromAPI)
    console.log('productsFromAPI är: ', productsFromAPI);
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  return (
    <Body>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Body>
  )
}

export default Root
