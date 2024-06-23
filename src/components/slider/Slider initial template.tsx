//Parent:Banner.tsx


//these 
// import './style-slider.css'
// Import Swiper React components
// Required modules
// import { EffectCoverflow, EffectCube,Scrollbar, A11y  } from 'swiper/modules';
// Import Swiper styles
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/effect-cube'
// import 'swiper/css/controller';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

type SliderPropType = { isVideoOpen: boolean };

export const Slider = ({ isVideoOpen }: SliderPropType) => {
  return (
    <div className={`slider__container ${isVideoOpen ? 'videoOpen' : ''}`}>
      <Swiper
        className={` swiper slider__container ${
          isVideoOpen ? 'videoOpen' : ''
        }`}
        direction={'vertical'}
        pagination={{
          clickable: false,
        }}
        modules={[
          Navigation,
          Pagination,
          // Scrollbar, A11y, EffectCube
        ]}
        loop={true}
        spaceBetween={550}
        slidesPerView={1}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        // scrollbar={{ draggable: false }}
        // effect={'cube'}
        // cubeEffect={{
        //   shadow: true,
        //   slideShadows: true,
        //   shadowOffset: 20,
        //   shadowScale: 0.94,
        // }}
      >
        {/* <div className="slides__wrapper"> */}
        {Array(13)
          .fill('_')
          .map((_, i) => (
            <SwiperSlide key={`fitness-model-${i + 1}`}>
              <div className='image-slide'>
                <img
                  className='model-img'
                  src={`/images/fitness-model-${i + 1}.png`}
                  alt={`fitness-model-${i + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default Slider;
