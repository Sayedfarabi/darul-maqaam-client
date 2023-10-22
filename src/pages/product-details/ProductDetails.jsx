import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube, EffectCards, EffectFade, EffectCoverflow, EffectFlip, EffectCreative } from 'swiper/modules';
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const ProductDetails = () => {
  const carouselData = [
    {
      _id: "carousel0001",
      imgURL:
        "https://assunnahtrust.org/shop/wp-content/uploads/2022/09/23.4-jiggasa-o-jobab-Front.jpg",
    },
    {
      _id: "carousel0001",
      imgURL:
        "https://assunnahtrust.org/shop/wp-content/uploads/2022/09/23.4-jiggasa-o-jobab-Back.jpg",
    },
  ];

  return (
    <section className="content-container">
      <div className="flex justify-between items-center">
        <div className="w-full md:w-1/2 px-4">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCoverflow]}
            effect={'coverflow'}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            autoplay = {{
                delay : 3000,
                disableOnInteraction : true,
                pauseOnMouseEnter : true,
                reverseDirection : false,
                stopOnLastSlide : false,
                waitForTransition : false
            }}
          >
            {
                carouselData.map(data => {
                    return <SwiperSlide 
                    key={data._id}>
                        <div>
                            <img 
                            src={data?.imgURL} 
                            alt=""
                            className="w-full h-full"></img>
                        </div>
                    </SwiperSlide>
                })
            }
            ...
          </Swiper>
        </div>
        <div className="w-full md:w-1/2">Product Description</div>
      </div>
    </section>
  );
};

export default ProductDetails;
