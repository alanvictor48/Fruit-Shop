import { ChangeEvent } from 'react';
import styles from './styles.module.css';

interface QuantityInputProps {
    value: number
    setValue: (value: number) => void
}

function QuantityInput({value, setValue}: QuantityInputProps) {
    
    const add = () => setValue(value + 1);
    const sub = () => setValue(value - 1);
    const change = (e: ChangeEvent) => setValue(Number((e.currentTarget as HTMLInputElement).value))

    return (
        <div className={styles.QuantityInput}>
            <span onClick={sub}>-</span>
            <input min={0} onChange={change} value={value} type="number" />
            <span onClick={add}>+</span>
        </div>
    );
}

export default QuantityInput;