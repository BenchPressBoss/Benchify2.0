import Button from '@components/ui/buttons/Button'
import MusicButton from '@components/ui/buttons/musicButton/MusicButton'

import styles from './SideBar.module.scss'

function SideBar() {
	return (
		<div className={styles.sideBar}>
			<div className={styles.content}>
				<nav>
					<Button
						path='/'
						text='Home'
						icon='/icons/homeNav.svg'
						className={styles.firstButton}
					/>
					<Button
						path='/songs'
						text='Songs'
						icon='/icons/songNav.svg'
						className={styles.button}
					/>
					<Button
						path='/artists'
						text='Artists'
						icon='/icons/microphoneNav.svg'
						className={styles.button}
					/>
					<Button
						path='/albums'
						text='Albums'
						icon='/icons/pauseNav.svg'
						className={styles.button}
					/>
				</nav>
				<div className={styles.likedTracks}>
					<MusicButton
						description='maxim brian'
						title='Sanct 52'
						type='small'
						img='/img.png'
					/>
				</div>
			</div>
		</div>
	)
}

export default SideBar
