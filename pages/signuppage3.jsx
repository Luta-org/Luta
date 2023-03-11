import AuthenticationNavbar from '@/components/AuthenticationNavbar'
import { Box } from '@chakra-ui/react'
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
          {/* <div className="flex flex-col  mt-5">
            <HStack mt={"20px"}>
              <PinInput size="lg">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </div> */}

          <div className="flex flex-col  align-center mt-5">
            <p className="text-[#313232]">
              Didn’t Recieve OTP?
            </p>
            <p className="text-[#0D806B]">
              Resend
            </p>
          </div>
        </div>

        <div className="flex mt-[30px] md:gap-[60px] gap-[15px]">
          <Link style={linkStyle} href="/signuppage2">
            <button className="px-[60px] py-[10px] rounded-full text-black bg-white border border-secondary bg-white cursor-pointer mt-[20px] text-[20px] ">
              Back
            </button>
          </Link>
          <Link style={linkStyle} href="/signuppage4">
            <button className="px-[60px] py-[10px] rounded-full text-black bg-white border border-primary bg-white cursor-pointer mt-[20px] text-[20px] bg-primary  ">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default signuppage3