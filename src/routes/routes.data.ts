import Albums from '@components/screens/Albums/Albums'
import Artists from '@components/screens/Artists/Artists'
import Songs from '@components/screens/Songs/Songs'
import Login from '@components/screens/login/Login'

import Home from '../components/screens/home/Home'

export const ROUTES = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/songs',
		component: Songs,
		auth: false
	},
	{
		path: '/artists',
		component: Artists,
		auth: false
	},
	{
		path: '/albums',
		component: Albums,
		auth: false
	},
	{
		path: '/auth',
		component: Login,
		auth: false
	}
]
