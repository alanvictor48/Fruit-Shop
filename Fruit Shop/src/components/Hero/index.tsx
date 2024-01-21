import styles from './styles.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';

import fruit1_url from '@/assets/images/fruit.jpg';
import fruit2_url from '@/assets/images/fruit2.jpg';

function Hero() {
    return (
        <div className={styles.Hero}>
            <div className={styles.background}></div>
            <section>
                <h2>100% Organic Foods</h2>
                <h1>Organic Veggies & Fruit foods</h1>
            </section>
            <aside>
                <Swiper
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Autoplay, Pagination]}
                    className={styles.mySwiper}>
                        <SwiperSlide><img src={fruit1_url} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={fruit2_url} alt="" /></SwiperSlide>
                </Swiper>
            </aside>
        </div>
    );
}

export default Hero;