import styles from './styles.module.css';
import { Link } from 'react-router-dom';

interface Item {
    icon: string
    text: string
}

const contactItems: Item[] = [
    {
        'icon': '',
        'text': '123 Street, New York'
    },
    {
        'icon': '',
        'text': 'fruitables@example.com'
    }
]

function TopHeader() {
    return (
        <section className={styles.TopHeader}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <ul>
                        {contactItems.map(item => 
                            <li key={item.text}>
                                <img src={item.icon} alt="" />
                                <span>{ item.text }</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className={styles.links}>
                    <ul>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Terms of Use</Link>
                        <Link to='/'>Sales and Refounds</Link>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TopHeader;