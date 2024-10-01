import { ReactNode } from 'react'

import styles from './Layout.module.scss'
import Header from './header/Header'
import SideBar from './sideBar/SideBar'

interface LayoutProps {
	children: ReactNode
}

function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.sideBar}>
				<SideBar></SideBar>
			</div>
			<div>
				<Header />
				{children}
			</div>
		</div>
	)
}

export default Layout
