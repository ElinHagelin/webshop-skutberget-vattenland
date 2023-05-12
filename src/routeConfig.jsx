import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Products from './routes/Products.jsx'
import ProductDetails from './routes/ProductDetails.jsx'
import Home from './routes/Home.jsx'
import CartPage from './routes/CartPage.jsx'
import AdminPage from './routes/Admin.jsx'
import AdminHome from './routes/AdminHome.jsx'
import AdminProducts from './routes/AdminProducts.jsx'
import AdminUsers from './routes/AdminUsers.jsx'

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <Home />
			},
			{
				path: 'products',
				element: <Products />,
			},
			{
				path: 'details/:id',
				element: <ProductDetails />,
			},
			{
				path: '/cart',
				element: <CartPage />,
			},
			{
				path: 'admin',
				element: <AdminPage />,
				children: [
					{
						path: '',
						element: <AdminHome />
					},
					{
						path: 'products',
						element: <AdminProducts />
					},
					{
						path: 'users',
						element: <AdminUsers />
					}
				]
			},
			{
				path: '*',
				element: <Home />
			}
		]
	}
])

export { router }