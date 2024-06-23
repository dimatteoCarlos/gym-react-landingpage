//Parent:Banner.tsx

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
        modules={[Navigation, Pagination]}
        loop={true}
        spaceBetween={550}
        slidesPerView={1}
        navigation={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/* <div className="slides__wrapper"> */}
        {Array(12)
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
