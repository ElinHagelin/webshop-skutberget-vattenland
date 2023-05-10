import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Products from './routes/Products.jsx'
import ProductDetails from './routes/ProductDetails.jsx'
import Home from './routes/Home.jsx'
import productLoader from './utils/ajax.js'
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
				loader: productLoader
			},
			{
				path: 'details/:id',
				element: <ProductDetails />,
				loader: productLoader
			},
			{
				path: 'admin',
				element: <AdminPage />,
				loader: productLoader,
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
			}
		]
	}
])

export { router }