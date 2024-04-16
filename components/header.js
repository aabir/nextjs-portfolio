import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'

const Header = () => (
    <div className={utilStyles.header}>
        <div className={utilStyles.name}>
            <h1>Shible Noman</h1>
        </div>
        <div className={utilStyles.menu}>
            <Link href="/" className={utilStyles.link}>
                Home
            </Link>
            <Link href="/about" className={utilStyles.Link}>
                About
            </Link>
            <Link href="/contact" className={utilStyles.Link}>
                Contact
            </Link>
        </div>
    </div>
);

export default Header;