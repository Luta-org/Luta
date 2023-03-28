import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Team = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      pagination={true}
      navigation={{clickable: true}}
      spaceBetween={50}
      slidesPerView={1}      
      className='h-[70vh] w-[100vw]'
    >
      <SwiperSlide>       
        <div className='w-full h-[50px] flex justify-center items-center'>
          lorem40sncdsjhjdhfvdjfbjcfjvhjdfgvhjxchvjxvbxchjvghcxbvjxcgvhjdxvfghfgvcbvcbjcxnvjkdxv
        </div> 
      </SwiperSlide>

      <SwiperSlide>       
        <div className='w-full h-[50px] flex justify-center items-center'>
          lorem40sncdsjhjdhfvdjfbjcfjvhjdfgvhjxchvjxvbxchjvghcxbvjxcgvhjdxvfghfgvcbvcbjcxnvjkdxv
        </div> 
      </SwiperSlide>

      <SwiperSlide>       
        <div className='w-full h-[50px] flex justify-center items-center'>
          lorem40sncdsjhjdhfvdjfbjcfjvhjdfgvhjxchvjxvbxchjvghcxbvjxcgvhjdxvfghfgvcbvcbjcxnvjkdxv
        </div> 
      </SwiperSlide>

      <SwiperSlide>       
        <div className='w-full h-[50px] flex justify-center items-center'>
          lorem40sncdsjhjdhfvdjfbjcfjvhjdfgvhjxchvjxvbxchjvghcxbvjxcgvhjdxvfghfgvcbvcbjcxnvjkdxv
        </div> 
      </SwiperSlide>
    </Swiper>
  )
}

export default Team
