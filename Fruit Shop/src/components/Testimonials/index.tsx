import styles from './styles.module.css';
import './swiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import StarIcon from '@/assets/icons/star.svg?react';

import ron_url from '@/assets/images/Ron.jpg';
import hermione_url from '@/assets/images/hermione.jpg';
import harry_url from '@/assets/images/harry.jpg';

function Testimonials() {
    return (
        <div className={styles.Testimonials}>
            <h4>Our Testimonial</h4>
            <h1>Our Client Saying!</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 50,
                    },
                  }}
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
                <SwiperSlide>
                    <Testimonial
                        photo={ron_url}
                        description='Lorem Ipsum is simply dummy text of the printing Ipsum has been the industrys standard dummy text ever since the 1500s'
                        name='Ron Weasley'
                        role='Wizard'
                        stars={5}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial
                        photo={harry_url}
                        description='Lorem Ipsum is simply dummy text of the printing Ipsum has been the industrys standard dummy text ever since the 1500s'
                        name='Harry Potter'
                        role='Wizard'
                        stars={4}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial
                        photo={hermione_url}
                        description='Lorem Ipsum is simply dummy text of the printing Ipsum has been the industrys standard dummy text ever since the 1500s'
                        name='Hermione Granger'
                        role='Wizard'
                        stars={4}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

interface TestimonialProps {
    photo: string
    description: string
    name: string
    role: string
    stars: number
}

function Testimonial({photo, description, name, role, stars}: TestimonialProps) {
    return (
        <div className={styles.Testimonial}>
            <div className={styles['photo-ctn']}><img src={photo} alt="" /></div>
            <p>{ description }</p>
            <footer>
                <div className={styles.profile}>
                    <h5>{ name }</h5>
                    <span>{ role }</span>
                </div>
                <div className={styles['stars-ctn']}>
                    <StarIcon className={`${styles.star} ${stars > 0 && styles.active}`} />
                    <StarIcon className={`${styles.star} ${stars > 1 && styles.active}`} />
                    <StarIcon className={`${styles.star} ${stars > 2 && styles.active}`} />
                    <StarIcon className={`${styles.star} ${stars > 3 && styles.active}`} />
                    <StarIcon className={`${styles.star} ${stars > 4 && styles.active}`} />
                </div>
            </footer>
        </div>
    )
}

export default Testimonials;