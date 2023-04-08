import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from "next/image";
import akin from "../../public/images/akin.png";
import erik from "../../public/images/erik.png";
import jane from "../../public/images/jane.png";
import femi from "../../public/images/femi.png";
import tofunmi from "../../public/images/tofunmi.png";
import img from "../../public/images/sample.png";


const Team = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      pagination={true}
      navigation={{clickable: true}}
      spaceBetween={0}
      slidesPerView={1}      
      className='h-[70vh] w-[100vw]'
    >
      <SwiperSlide>       
        <div className='flex flex-col justify-center items-center'>
          <div>
            <Image src={img} alt="sample" className='rounded-[1000px] h-[300px] w-[300px]' />
          </div>
          <h1 className='mt-10 text-[32px]'>Oladimeji Micheal</h1>
          <p className='text-[24px]'>Frontend Developer</p>
        </div> 
      </SwiperSlide>

      <SwiperSlide>       
        <div className='flex flex-col justify-center items-center'>
          <div>
            <Image src={jane} alt="sample" className='rounded-[1000px] h-[300px] w-[300px]' />
          </div>
          <h1 className='mt-10 text-[32px]'>Ayogu Janefrances</h1>
          <p className='text-[24px]'>Design Lead</p>
        </div> 
      </SwiperSlide>

      <SwiperSlide>       
        <div className='flex flex-col justify-center items-center'>
          <div>
            <Image src={akin} alt="sample" className='rounded-[1000px] h-[300px] w-[300px]' />
          </div>
          <h1 className='mt-10 text-[32px]'>Oyewole Akinkunmi</h1>
          <p className='text-[24px]'>Frontend developer</p>
        </div>  
      </SwiperSlide>

      <SwiperSlide>       
        <div className='flex flex-col justify-center items-center'>
          <div>
            <Image src={femi} alt="sample" className='rounded-[1000px] h-[300px] w-[300px]' />
          </div>
          <h1 className='mt-10 text-[32px]'>Femi-Fadiya Segun</h1>
          <p className='text-[24px]'>Product Designer</p>
        </div> 
      </SwiperSlide>
       <SwiperSlide>       
        <div className='flex flex-col justify-center items-center'>
          <div>
            <Image src={tofunmi} alt="sample" className='rounded-[1000px] h-[300px] w-[300px]' />
          </div>
          <h1 className='mt-10 text-[32px]'>Olayiwola Jesutofunmi</h1>
          <p className='text-[24px]'>Frontend developer</p>
        </div> 
      </SwiperSlide>
      <SwiperSlide>       
        <div className='flex flex-col justify-center items-center'>
          <div>
            <Image src={erik} alt="sample" className='rounded-[1000px] h-[300px] w-[300px]' />
          </div>
          <h1 className='mt-10 text-[32px]'>Eric Obulo</h1>
          <p className='text-[24px]'>Product Designer</p>
        </div> 
      </SwiperSlide>
    </Swiper>
  )
}

export default Team
