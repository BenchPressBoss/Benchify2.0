import NotFound from '@components/screens/notFound/NotFound'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from './routes.data'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				{ROUTES.map(route => {
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
