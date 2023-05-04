import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Products from './routes/Products.jsx'
import ProductDetails from './routes/ProductDetails.jsx'
import Home from './routes/Home.jsx'
import productLoader from './utils/ajax.js'

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
			}
		]
	}
])

export { router }