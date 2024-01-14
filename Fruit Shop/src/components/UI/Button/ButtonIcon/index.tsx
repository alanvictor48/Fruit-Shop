import styles from './styles.module.css';

interface ButtonIconProps {
    icon: React.ElementType
}

function ButtonIcon({icon: Icon}: ButtonIconProps) {
    return (
        <div className={styles.ButtonIcon}>
            <Icon className={styles.icon} />
        </div>
    );
}

export default ButtonIcon;