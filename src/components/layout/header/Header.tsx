import styles from './Header.module.scss'

function Header() {
	return (
		<header>
			<h1>Welcome back, userName</h1>
			<div className={styles.div}></div>
		</header>
	)
}

export default Header
