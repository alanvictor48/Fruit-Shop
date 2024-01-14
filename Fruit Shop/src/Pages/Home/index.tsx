import { ReactNode, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import styles from './styles.module.css';

import Hero from '@/components/Hero';
import Header from '../../components/Header';
import ProductList from '@/components/ProductList';
import Footer from '@/components/Footer';
import Testimonials from '@/components/Testimonials';

import SideMenu from '@/components/SideMenu';

import ShippingIcon from '@/assets/icons/local_shipping.svg?react';
import SecurityIcon from '@/assets/icons/verified_user.svg?react';
import ExchangeIcon from '@/assets/icons/currency_exchange.svg?react';
import SupportIcon from '@/assets/icons/call.svg?react';

import GroupIcon from '@/assets/icons/groups.svg?react';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    const nodeRef = useRef(null);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={styles.Home}>
            <Header openMenu={openMenu} />
            <CSSTransition
                nodeRef={nodeRef}
                in={menuOpen}
                timeout={1000}
                classNames={{
                    enter: styles.enter,
                    enterActive: styles['enter-active'],
                    enterDone: styles['enter-done'],
                    exit: styles.exit,
                    exitActive: styles['exit-active'],
                    exitDone: styles['exit-done']
                }}
                unmountOnExit
                >
                    <SideMenu className={styles.sidemenu} ref={nodeRef} close={closeMenu}>
                        <div className={styles['menu-links']}>
                            <Link to='/'>Home</Link>
                            <Link to='/'>Shop</Link>
                            <Link to='/'>Shop Detail</Link>
                            <Link to='/'>Contact</Link>
                        </div>
                    </SideMenu>
            </CSSTransition>
            <main>
                <Hero />
                <Features />
                <ProductList />
                <QualityStatistics />
            </main>
            <Testimonials />
            <Footer />
        </div>
    );
}

function Features() {
    return (
        <section id='Features' className={styles['features-ctn']}>
            <FeatureCard>
                <div className={styles['icon-wrapper']}>
                    <ShippingIcon className={styles.icon} />
                </div>
                <h5>Free Shipping</h5>
                <span>Free on order over $300</span>
            </FeatureCard>

            <FeatureCard>
                <div className={styles['icon-wrapper']}>
                    <SecurityIcon className={styles.icon} />
                </div>
                <h5>Security Payment</h5>
                <span>100% security payment</span>
            </FeatureCard>

            <FeatureCard>
                <div className={styles['icon-wrapper']}>
                    <ExchangeIcon className={styles.icon} />
                </div>
                <h5>30 Day Return</h5>
                <span>30 day money guarantee</span>
            </FeatureCard>

            <FeatureCard>
                <div className={styles['icon-wrapper']}>
                    <SupportIcon className={styles.icon} />
                </div>
                <h5>24/7 Support</h5>
                <span>Support every time fast</span>
            </FeatureCard>
        </section>
    )
}

function FeatureCard({children}: {children: ReactNode}) {
    return (
        <div className={styles['features-card']}>
            { children }
        </div>
    )
}

function QualityStatistics() {
    return (
        <div className={styles.QualityStatistics}>
            <QualityCard title='SATISFIED CUSTOMERS' value='1963' />
            <QualityCard title='QUALITY OF SERVICE' value='99%' />
            <QualityCard title='QUALITY CERTIFICATES' value='33' />
            <QualityCard title='AVAILABLE PRODUCTS' value='789' />
        </div>
    )
}

interface QualityCardProps {
    title: string
    value: string
}

function QualityCard({title, value}: QualityCardProps) {
    return (
        <div className={styles.QualityCard}>
            <GroupIcon className={styles.icon} />
            <h4> { title } </h4>
            <h1> { value } </h1>
        </div>
    )
}

export default Home;