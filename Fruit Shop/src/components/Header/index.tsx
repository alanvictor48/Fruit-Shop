import { useEffect, useRef } from 'react';
import MainHeader from './MainHeader';
import TopHeader from './TopHeader';
import styles from './styles.module.css';

interface HeaderProps {
    openMenu: () => void
}

function Header({openMenu}: HeaderProps) {
    const header = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if(!header.current) return;
        if(window.pageYOffset > 50) {
            header.current.classList.add(styles.hide);
        } else {
            header.current.classList.remove(styles.hide);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div ref={header} className={styles.Header}>
            <TopHeader />
            <MainHeader openMenu={openMenu} />
        </div>
    );
}

export default Header;