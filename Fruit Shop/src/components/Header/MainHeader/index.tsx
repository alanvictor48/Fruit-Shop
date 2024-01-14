import styles from './styles.module.css';

import ShoppingBagIcon from '@/assets/icons/shopping_bag.svg?react';
import PersonIcon from '@/assets/icons/person.svg?react';
import MenuIcon from '@/assets/icons/menu.svg?react';

import CartModal from './CartModal';
import { useContext } from 'react';
import { cartContext } from '@/contexts/useCartContext';
import { modalContext } from '@/contexts/useModalContext';

interface MainHeaderProps {
    openMenu: () => void
}

function MainHeader({openMenu}: MainHeaderProps) {
    return (
        <div className={styles.MainHeader}>
            <nav>
                <h1>Fruitables</h1>
                <div className={styles['secondary-nav']}>
                    <div className={styles.links}>
                        <a href='#'>Home</a>
                        <a href='#ProductList'>Shop</a>
                        <a href='#Features'>Shop Details</a>
                        <a href='#Footer'>Contact</a>
                    </div>
                    <div className={styles.icons}>
                        <CartIcon />
                        <PersonIcon className={styles.icon} />
                    </div>
                    <MenuIcon onClick={openMenu} className={`${styles.burguer} ${styles.icon}`} />
                </div>
            </nav>
        </div>
    );
}

function CartIcon() {
    const { products } = useContext(cartContext);
    const { setContent, toggle, ref } = useContext(modalContext);

    const handleOpen = () => {
        setContent(<CartModal ref={ref} />)
        toggle();
    }

    return (
        <div className={ styles.CartIcon }>
            <div className={ styles.circle }>{ products.length }</div>
            <ShoppingBagIcon 
                onClick={handleOpen}
                className={styles.icon} 
            />
        </div>
    )
}

export default MainHeader;