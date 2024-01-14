import { ReactNode, forwardRef } from 'react';
import styles from './styles.module.css';

import CloseIcon from '@/assets/icons/close.svg?react';

interface SideMenuProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode
    close: () => void
}

const SideMenu = forwardRef<HTMLDivElement, SideMenuProps>(({children, close, className: classes}: SideMenuProps, ref) => {
    return (
        <div ref={ref} className={`${styles.SideMenu} ${classes}`}>
            <header>
                <CloseIcon className={styles.icon} onClick={close} />
            </header>
            { children }
        </div>
    );
});

export default SideMenu;