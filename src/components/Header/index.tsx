import styles from './styles.module.scss'
import Image from 'next/image'
import logo from "../../../public/images/ig.news.svg";

export const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Image src={logo} alt="Logo IG news" />
                <nav>
                    <a className={styles.active} href="">Home</a>
                    <a href="">Posts</a>
                </nav>
            </div>
        </header>
    )
}
