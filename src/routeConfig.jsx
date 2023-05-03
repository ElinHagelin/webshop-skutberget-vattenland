import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'

export const router = createHashRouter([
	{
		path: '/',
		element: <Root />
	}
])