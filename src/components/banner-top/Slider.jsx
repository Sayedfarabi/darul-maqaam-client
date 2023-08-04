import React from 'react';
import item1 from '../../assets/images/images/hero/banner_slide01.png';
import item2 from '../../assets/images/images/hero/banner_slide02.png';
import item3 from '../../assets/images/images/hero/banner_slide03.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Slide from './Slide';

const Slider = () => {
    const slidesData = [
        {
            _id: "slide0001",
            img: item1
        },
        {
            _id: "slide0002",
            img: item2
        },
        {
            _id: "slide0003",
            img: item3
        }
    ]
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            Autoplay={{ enabled: true, delay: 3000 }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {
                slidesData.map(data => {
                    return <SwiperSlide>
                        <Slide
                            key={data?._id}
                            image={data?.img}>

                        </Slide>
                    </SwiperSlide>
                })
            }





        </Swiper>
    );
};

export default Slider;