import { Button } from '@/components/UI/Button';
import styles from './styles.module.css';

import CloseIcon from '@/assets/icons/close.svg?react';

import QuantityInput from '@/components/UI/QuantityInput';
import { forwardRef, useContext, useEffect, useState } from 'react';
import { cartContext } from '@/contexts/useCartContext';
import { useQueries, useQuery } from 'react-query';

import { fetchFruit } from '@/api/fruit';
import { modalContext } from '@/contexts/useModalContext';

const CartModal = forwardRef<HTMLDivElement>((_props, ref) => {
    const { toggle } = useContext(modalContext);
    const { products } = useContext(cartContext);
    const [total, setTotal] = useState(0);

    const result = useQueries(
        products.map((item) => {
            return {
                queryKey: ['fruit', item._id],
                queryFn: () => fetchFruit(item._id)
            }
        })
    )

    useEffect(() => {
        let sum = 0;
        for(let i=0 ; i < result.length ; ++i) {
            sum += (result[i].data?.price ?? 0) * (products[i].quantity)
        }
        setTotal(sum)
    }, [products, result])
    
    return (
            <div ref={ref} className={styles.CartModal}>
                <header>
                    <h2>Your cart</h2>
                    <CloseIcon onClick={toggle} className={ styles.icon } />
                </header>
                {   products.length > 0 ?
                    <>
                        <section className={ styles['product-list'] }>
                            { products.map(({_id, quantity}) => 
                                <CartProduct key={_id} _id={_id} quantity={quantity} />
                            )}
                        </section>
                        <footer>
                            <div className={styles['total-price-ctn']}>
                                <span>Total price</span>
                                <span className={styles['total-price']}>R$ { total.toFixed(2) }</span>
                            </div>
                            <Button.Root className={ styles['continue-btn'] }>
                                Continuar
                            </Button.Root>
                        </footer>
                    </>
                    : 
                    <>
                        <img src="./src/assets/images/empty-cart.png" alt="Empty cart" />
                        <h2>Empty Cart</h2>
                    </>
                }
        </div>
    );
})

interface CartProductProps {
    _id: number
    quantity: number
}

function CartProduct({_id, quantity}: CartProductProps) {
    const { add, sub, remove } = useContext(cartContext);
    const [qtd, setQtd] = useState(quantity);
    const { data: fruit } = useQuery(['fruit', _id], () => fetchFruit(_id));

    const handleChange = (value: number) => {
        if(value === 0) return remove(_id);
        else if(value > qtd) add(_id);
        else sub(_id);

        setQtd(value);
    }

    return (
        <div className={ styles.CartProduct }>
            <div className={ styles['img-ctn'] }>
                <img src={ fruit?.image_url } alt="" />
            </div>
            <div className={ styles.details }>
                <span className={ styles.name }>{ fruit?.name }</span>
                <span className={ styles.description }>{ fruit?.description }</span>
            </div>
            <div className={ styles['value'] }>
                <QuantityInput value={qtd} setValue={handleChange} />
                <span className={ styles.price }>
                    R$ { ( (fruit?.price ?? 0) * qtd ).toFixed(2) }
                </span>
            </div>
        </div>
    )
}

export default CartModal;