import styles from './styles.module.css';

interface ButtonRootProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

function ButtonRoot({ children, ...rest }: ButtonRootProps) {
    return (
        <button {...rest} className={`${styles.ButtonRoot} ${rest.className}`}>
            { children }
        </button>
    );
}

export default ButtonRoot;