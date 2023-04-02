import { Box, Button, Flex, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState, React } from "react";
import line from "../public/images/line.png";
import Group from "../public/images/Group.png";
import fpp from "../public/images/fpp.png";
import Image from "next/image";
import AuthenticationNavbar from "@/components/AuthenticationNavbar";
import leftarrow from "../public/images/leftarrow.png";
import rightarrow from "../public/images/rightarrow.png";

const forgotpassword = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div>
      <AuthenticationNavbar />
      <div className="flex justify-between md:justify-center mt-2">
        <div className="md:hidden">
          <Link style={linkStyle} href="/login">
            <Image src={leftarrow} alt="leftarrow" />
          </Link>
        </div>
        <h1 className="text-[#0E0008] text-[30px] md:text-[48px] text-center font-bold">
          Reset Password
        </h1>
        <div className="md:hidden">
          <Image src={rightarrow} alt="leftarrow" />
        </div>
      </div>
      <div>
        <div className="flex flex-col text-left pt-5  justify-center lg:px-10 px-5 md:px-0 w-full  md:w-[60%] md:m-auto lg:w-[45%] lg:m-auto ">
          <div>
            <Center>
              <div className="hiddden md:block">
                <Image src={Group} alt="GroupLogo" />
              </div>
            </Center>

            <p className=" font-normal text-base md:text-[20px] text-center mt-2 text-[#575757]">
              Enter your registered phone number
            </p>
          </div>
          <div>
            <div className="justify-center mt-10 lg:w-[450px] md:w-[400px] m-auto">
              <Image src={fpp} alt="fpp" />
            </div>
          </div>
          <div>
            <div className="hidden  md:block absolute top-[60px] left-0 ">
              <Image src={line} alt="line" />
            </div>
          </div>

          <div>
            <div className="flex flex-col w-full lg:w-full mt-8">
              <h1 className=" md:text-[20px] text-[15px] font-normal text-[#0E0008]">
                Phone Number
              </h1>
              <input
                className="border border-[#C2C3C8] px-1 py-5 rounded-md mt-2"
                type="text"
                placeholder="0803xxxxxxxx"
              />
            </div>
          </div>
          <Center>
            <Button
              w={"320px"}
              py={10}
              color={"black"}
              borderRadius={"100px"}
              borderColor={"#1AFFD5"}
              backgroundColor={"#1AFFD5"}
              outline={"none"}
              cursor="pointer"
              mt="35px"
            >
              <Link style={linkStyle} href="/forgotpassword2">
                <Text fontSize={"25px"}>Continue</Text>
              </Link>
            </Button>
          </Center>
        </div>
      </div>
    </div>
  );
};

export default forgotpassword;
