import { Box, Button, Flex, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState, React } from "react";
import SocialBtn from "../components/molecule/SocialBtn";
import line from "../public/images/line.png";
import Group from "../public/images/Group.png";
import Image from "next/image";
import AuthenticationNavbar from "@/components/AuthenticationNavbar";

const login = () => {
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
           
            <h1 className="text-[#0E0008]  text-[30px] md:text-[48px] text-center font-bold">
              Welcome Back
            </h1>
            <p className=" font-normal text-base md:text-[20px] text-center mt-2 text-[#575757]">
              Login to continue from where you stopped.
            </p>
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
                className="border border-[#C2C3C8] px-2 py-5 rounded-md mt-2"
                type="text"
                placeholder="0803xxxxxxxx"
              />
            </div>

            <div className="flex flex-col w-full lg:w-full mt-5">
              <h1 className=" text-base font-normal text-[#0E0008]">
                Password
              </h1>
              <input
                className="border border-[#C2C3C8] px-2 py-5 rounded-md mt-2"
                type="text"
                placeholder="******"
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
              mt="25px"
            >
              <Text fontSize={"25px"}>Login</Text>
            </Button>
          </Center>
          <Center>
            <Link style={linkStyle} href="/forgotpassword">
              <p className="text-[#0D806B] mt-5">Forgot password?</p>
            </Link>
          </Center>
          <Flex
            marginTop={"20px"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"15px"}
          >
            <Box backgroundColor={"#555A73"} w={"150px"} h={"1px"}></Box>
            <Text color={"#313232"}>Alternatively</Text>
            <Box backgroundColor={"#555A73"} w={"150px"} h={"1px"}></Box>
          </Flex>
          <Center>
            <Box marginTop={"10px"}>
              <SocialBtn />
            </Box>
          </Center>
          <Center>
            <div className="flex gap-2  align-center mt-10">
              <p className="text-[#313232]">Dont have an account yet?</p>
              <Link style={linkStyle} href="/signup">
                <p className="text-[#0D806B]">Register</p>

              </Link>
            </div>
          </Center>
        </div>
      </div>
    </div>
  );
};

export default login;
