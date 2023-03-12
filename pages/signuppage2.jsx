import { Text, Box,  Checkbox,Center } from "@chakra-ui/react";
import React from "react";
import AuthenticationNavbar from "@/components/AuthenticationNavbar";
import Link from "next/link";
import line from "../public/images/line.png";
import Image from "next/image";

const SignUpPage2 = () => {
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
            Sign Up
          </h1>
          <p className=" font-normal text-[15px] md:text-[18px] text-center  text-[#575757]">
            Fill the registration form to join the community of LUTA students
          </p>
        </div>
        <div>
          <div className="hidden  md:block absolute top-[60px] left-0 ">
            <Image src={line} alt="line" />
          </div>
        </div>
        <div>
          <div className="flex flex-col w-full lg:w-full mt-5">
            <h1 className=" md:text-[20px] text-[15px] font-normal text-[#0E0008]">
              Name of Institution
            </h1>
            <input
              className="border border-[#C2C3C8] px-1 py-5 rounded-md mt-2"
              type="text"
              placeholder="codeboyfriend"
            />
          </div>

          <div className="flex flex-col w-full lg:w-full mt-5">
            <h1 className=" text-base font-normal text-[#0E0008]">Password</h1>
            <input
              className="border border-[#C2C3C8] px-1 py-5 rounded-md mt-2"
              type="text"
              placeholder="******"
            />
            <div className="flex justify-between text-[10px] md:text-[14px]">
              <Text color={"#00072D"}>Uppercase</Text>
              <Text color={"#00072D"}>Lowercase</Text>
              <Text color={"#ADADAD"}>Special character</Text>
              <Text color={"#00072D"}>Number</Text>
              <Text color={"#00072D"}>Min 8 characters</Text>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-full mt-8">
            <h1 className=" md:text-[20px] text-[15px] font-normal text-[#0E0008]">
              Confirm Password
            </h1>
            <input
              className="border border-[#C2C3C8] px-1 py-5 rounded-md mt-2"
              type="text"
              placeholder="******"
            />
          </div>
          <div className="gap-[5px] text-left mt-[10px]">
            <Checkbox />
            <div className="flex text-[12px] md:text-[15px] gap-[4px]">
              By signing up, you agree to our
              <p className="text-primary">terms and conditions. .</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Link style={linkStyle} href="/signup">
            <button className="px-[60px] md:px-[100px] py-[10px] rounded-full text-black bg-white border border-secondary bg-white cursor-pointer mt-[20px] text-[20px] ">
              Back
            </button>
          </Link>
          <Link style={linkStyle} href="/signuppage3">
            <button className="px-[60px] md:px-[100px] py-[10px] rounded-full text-black  border border-primary  cursor-pointer mt-[20px] text-[20px] bg-primary  ">
              Next
            </button>
          </Link>
        </div>
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
};

export default SignUpPage2;
