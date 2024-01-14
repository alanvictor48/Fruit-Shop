import { Fruit } from '@/models/interfaces/fruit';
import { Button } from '../UI/Button';
import styles from './styles.module.css';

import ShoppingBag from '@/assets/icons/shopping_bag.svg?react';
import { useContext } from 'react';
import { cartContext } from '@/contexts/useCartContext';

function FruitCard(fruit: Fruit) {
    const { add } = useContext(cartContext);

    const addToCart = (_id: number) => {
        add(_id)
    }

    return (
        <div className={styles.FruitCard}>
            <div className={styles['img-ctn']}>
                <div className={styles.category}><span>{ fruit.category.name }</span></div>
                <img src={ fruit.image_url } alt="" />
            </div>
            <div className={styles['content-ctn']}>
                <h2>{ fruit.name }</h2>
                <p>{ fruit.description }</p>
            </div>
            <div className={styles['bottom-ctn']}>
                <span className={styles.price}>R${ (fruit.price).toFixed(2) } /kg</span>
                <Button.Root onClick={() => addToCart(fruit._id)}>
                    <ShoppingBag className={styles.icon} />
                    <span>Add to Cart</span>
                </Button.Root>
            </div>
        </div>
    );
}

export default FruitCard;