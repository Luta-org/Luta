import React from 'react'
import google from "../../public/images/google.png"
import facebook from "../../public/images/facebook.png";
import Image from "next/image";

const SocialBtn = () => {
  return (
    <div>
      <div className="flex flex-col justify-center md:flex-row md:gap-[15px] gap-[10px]">
        <button className="px-[30px] py-[15px] rounded-full w-[280px] md:w-[240px]  border border-black bg-white cursor-pointer">
          <div className="flex items-center  justify-between  md:gap-[10px]">
            <Image src={google} alt="google" />
            <p className="md:text-[15px] text-[17px] items-center">Continue with Google</p>
          </div>
        </button>
        <div className="mt-5 md:mt-0">
        <button className="px-[20px] py-[15px] rounded-full w-[280px] md:w-[240px]  border border-black bg-white cursor-pointer">
          <div className="flex items-center justify-between md:gap-[10px]">
            <Image src={facebook} alt="facebook" />
            <p className="md:text-[15px] text-[17px] items-center">Continue with Facebook</p>
          </div>
        </button>
        </div>
      </div>
    </div>
  );
}

export default SocialBtn
