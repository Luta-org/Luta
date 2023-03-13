import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const Team = () => {
  return (
    <Swiper
        modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className='h-[70vh]'
    >
      <SwiperSlide className='flex justify-center items-center'> lorem40sncdsjhjdhfvdjfbjcfjvhjdfgvhjxchvjxvbxchjvghcxbvjxcgvhjdxvfghfgvcbvcbjcxnvjkdxv </SwiperSlide>
      <SwiperSlide> lorem40sncdsjhjdhfvdjfbjcfjvhjdfgvhjxchvjxvbxchjvghcxbvjxcgvhjdxvfghfgvcbvcbjcxnvjkdxv </SwiperSlide>
      <SwiperSlide> lorem40sncdsjhjdhfvdjfbjcfjvhjdfgvhjxchvjxvbxchjvghcxbvjxcgvhjdxvfghfgvcbvcbjcxnvjkdxv</SwiperSlide>
      <SwiperSlide> lorem40sncdsjhjdhfvdjfbjcfjvhjdfgvhjxchvjxvbxchjvghcxbvjxcgvhjdxvfghfgvcbvcbjcxnvjkdxv</SwiperSlide>
    </Swiper>
  )
}

export default Team
