import Layout from '@components/layout/Layout'
import Player from '@components/ui/player/Player'

import styles from './Home.module.scss'

function Home() {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<div className={styles.trendingSong}></div>
				<Player />
			</div>
		</Layout>
	)
}

export default Home
