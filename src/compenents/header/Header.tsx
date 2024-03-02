import { FC } from 'react'
import styles from './Header.module.scss'
import Image from 'next/image'
import logo from '@/assets/Logo.svg'
import profile from '@/assets/img/profile-circle.svg'
import favorite from '@/assets/img/heart.svg'
const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<Image src={logo} alt="" width={40} height={100} />
				<h3><span>на</span>лодку</h3>
			</div>
			<div className={styles.links}>
				<Image src={favorite} alt="" width={40} height={30} />
				<Image src={profile} alt="" width={40} height={30} />
			</div>
		</header>
	)
}

export default Header
