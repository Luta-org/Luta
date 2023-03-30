import AuthenticationNavbar from '@/components/AuthenticationNavbar'
import { Box,Center, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link";
import Image from 'next/image';
import line from "../public/images/line.png";


const signuppage3 = () => {
    const linkStyle = {
      textDecoration: "none",
    };
  return (
    <div>
      <Box>
        <AuthenticationNavbar />
      </Box>

      <div className="flex flex-col text-left   justify-center lg:px-10 px-5 md:px-0 w-full  md:w-[65%] md:m-auto lg:w-[45%] lg:m-auto ">
        <div>
          <h1 className="text-[#0E0008] text-[30px] md:text-[48px] text-center font-bold">
            Validation
          </h1>
          <p className=" font-normal text-[15px] md:text-[18px] text-center  text-[#575757]">
            Enter the OTP sent to your Phone Number
          </p>
        </div>
        <div>
          <div className="hidden  md:block absolute top-[60px] left-0 ">
            <Image src={line} alt="line" />
          </div>
        </div>
        <div>
          <Center className="flex flex-col mt-5">
            <HStack mt={"20px"} className="md:gap-[20px]">
              <PinInput size="lg">
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]" />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]"  />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]"  />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]"  />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]"  />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]"  />
              </PinInput>
            </HStack>
          </Center>
          <Center>
            <div className="flex gap-2  align-center mt-10">
              <p className="text-[#313232]">Didn’t Recieve OTP?</p>
              <Link style={linkStyle} href="/login">
                <p className="text-[#0D806B]">Resend</p>
              </Link>
            </div>
          </Center>
          <Center>
            <p className="mt-3 text-primary">Try a different method</p>
          </Center>
         
        </div>

        <Center className="flex mt-[30px] flex-col">
          <Link style={linkStyle} href="/signuppage4">
            <button className="px-[60px] py-[10px] rounded-full text-black bg-[#1AFFD5] border border-primary bg-primary cursor-pointer mt-[20px] text-[20px] w-[350px] md:w-[470px] lg:w-[400px] ">
              Validate Profile
            </button>
          </Link>
          <Link style={linkStyle} href="/signuppage2">
            <button className="px-[60px] py-[10px] rounded-full text-black bg-white border border-secondary bg-white cursor-pointer mt-[20px] text-[20px] bg-primary w-[350px] md:w-[470px] lg:w-[400px]  ">
              Back
            </button>
          </Link>
        </Center>
        <Center>
          <div className="flex gap-2  align-center mt-10">
            <p className="text-[#313232]">Alresdy a member?</p>
            <Link style={linkStyle} href="/login">
              <p className="text-[#0D806B]">Login</p>
            </Link>
          </div>
        </Center>
      </div>
    </div>
  );
}

export default signuppage3