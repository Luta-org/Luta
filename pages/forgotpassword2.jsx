import { Box, Button, Flex, Center, Text, HStack, PinInput, PinInputField } from "@chakra-ui/react";
import Link from "next/link";
import { useState, React } from "react";
import line from "../public/images/line.png";
import Group from "../public/images/Group.png";
import checkpoint2 from "../public/images/checkpoint2.png";
import Image from "next/image";
import AuthenticationNavbar from "@/components/AuthenticationNavbar";

const forgotpassword = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div>
      <AuthenticationNavbar />
      <div>
        <div className="flex flex-col text-left pt-5  justify-center lg:px-10 px-5 md:px-0 w-full  md:w-[60%] md:m-auto lg:w-[45%] lg:m-auto ">
          <div>
            <Center>
              <div>
                <Image src={Group} alt="GroupLogo" />
              </div>
            </Center>

            <h1 className="text-[#0E0008] text-[30px] md:text-[48px] text-center font-bold">
              Reset Password
            </h1>
            <p className=" font-normal text-base md:text-[20px] text-center mt-2 text-[#575757]">
              Enter your OTP
            </p>
          </div>
          <div>
            <div className="justify-center mt-10 lg:w-[430px] md:w-[400px] m-auto">
              <Image src={checkpoint2} alt="fpp" />
            </div>
          </div>
          <div>
            <div className="hidden  md:block absolute top-[60px] left-0 ">
              <Image src={line} alt="line" />
            </div>
          </div>

          <Center className="flex flex-col mt-5">
            <HStack mt={"20px"}>
              <PinInput size="lg">
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]" />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]" />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]" />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]" />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]" />
                <PinInputField className="w-[50px] md:w-[60px] h-[50px] border border-[#C2C3C8] text-[center]" />
              </PinInput>
            </HStack>
          </Center>
          <Center>
            <div className="flex gap-2  align-center mt-10">
              <p className="text-[#313232]">Didn't receive OTP?</p>
              <Link style={linkStyle} href="/">
                <p className="text-[#0D806B]">Resend</p>
              </Link>
            </div>
          </Center>
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
              <Link style={linkStyle} href="/forgotpassword3">
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
