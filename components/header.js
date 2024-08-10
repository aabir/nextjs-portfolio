import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'
import { BLOG_URL } from './Constants';

const Header = () => (
    <div className={utilStyles.topHeader}>
        <div className={utilStyles.name}>
            <h1>Shible Noman</h1>
        </div>
        <div className={utilStyles.menu}>
            <Link href="/">
                Home
            </Link>
            <Link href="/cv"> 
                CV 
            </Link>
            {/* <Link href="/uses">
                Uses
            </Link> */}
            <Link href={BLOG_URL} target='_blank'>
                Notes
            </Link>
        </div>
    </div>
);

export default Header;