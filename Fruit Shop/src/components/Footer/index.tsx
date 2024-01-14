import styles from './styles.module.css';

import TwitterIcon from '@/assets/icons/twitter.svg?react';
import FacebookIcon from '@/assets/icons/facebook.svg?react';
import YoutubeIcon from '@/assets/icons/youtube.svg?react';
import LinkedinIcon from '@/assets/icons/linkedin.svg?react';

import CopyrightIcon from '@/assets/icons/copyright.svg?react';
import { Button } from '../UI/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer id='Footer' className={styles.Footer}>
            <section className={styles['top-section']}>
                <div className={styles.title}>
                    <h1>Fruitables</h1>
                    <span>Fresh products</span>
                </div>
                <div className={styles['social-medias']}>
                    <div className={styles['icon-wrapper']}><TwitterIcon className={styles.icon} /></div>
                    <div className={styles['icon-wrapper']}><FacebookIcon className={styles.icon} /></div>
                    <div className={styles['icon-wrapper']}><YoutubeIcon className={styles.icon} /></div>
                    <div className={styles['icon-wrapper']}><LinkedinIcon className={styles.icon} /></div>
                </div>
            </section>
            <section className={styles['middle-section']}>
                <div className={styles.column}>
                    <h2>Why People Like us</h2>
                    <p>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                    <Button.Root className={ styles['readmore-btn'] }>
                        Read More
                    </Button.Root>
                </div>
                <div className={styles.column}>
                    <h2>Shop Info</h2>
                    <Link to='/'>About us</Link>
                    <Link to='/'>Contact us</Link>
                    <Link to='/'>Privacy Policy</Link>
                    <Link to='/'>Terms & Condition</Link>
                    <Link to='/'>Return Policy</Link>
                    <Link to='/'>FAQs & Help</Link>
                </div>
                <div className={styles.column}>
                    <h2>Account</h2>
                    <Link to='/'>My Account</Link>
                    <Link to='/'>Shop details</Link>
                    <Link to='/'>Shopping Cart</Link>
                    <Link to='/'>Wishlist</Link>
                    <Link to='/'>Order History</Link>
                    <Link to='/'>International Orders</Link>
                </div>
                <div className={styles.column}>
                    <h2>Contact</h2>
                    <Link to='/'>Address: 1429 Netus Rd, NY 48247</Link>
                    <Link to='/'>Example@gmail.com</Link>
                    <Link to='/'>+0123 4567 8910</Link>
                    <span>Payment Acepted</span>
                    <div className={styles.payments}>
                        <img src="./src/assets/images/payments.png" alt="" />
                    </div>
                </div>
            </section>
            <section className={styles['bottom-section']}>
                <div>
                    <CopyrightIcon className={styles.icon} />
                    <span>Fruitables</span>
                    <span>, All right reserved</span>
                </div>
                <div>
                    <span>
                        Designed By <a href="">HTML Codex</a> Distributed By <a href="">ThemeWagon</a>
                    </span>
                </div>
            </section>
        </footer>
    );
}

export default Footer;