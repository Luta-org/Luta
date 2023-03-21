import React from 'react'
import google from "../../public/images/google.png"
import facebook from "../../public/images/facebook.png";
import Image from "next/image";

const SocialBtn = () => {
  return (
    <div>
      <div className="flex md:gap-[15px] gap-[10px]">
        <button className='px-[20px] py-[15px] rounded-full  border border-black bg-white cursor-pointer'  >
          <div className='flex items-center gap-[5px] md:gap-[10px]'>
            <Image src={google} alt="google" />
            <p className='md:text-[15px] text-[10px]'>Continue with Google</p>
          </div>
        </button>
       <button className='px-[20px] py-[15px] rounded-full  border border-black bg-white cursor-pointer'  >
         <div className='flex items-center gap-[5px] md:gap-[10px]'>
            <Image src={facebook} alt="facebook" />
            <p className='md:text-[15px] text-[10px]'>Continue with Facebook</p>
          </div>
        </button>
      </div>
      </div>
  );
}

export default SocialBtn
