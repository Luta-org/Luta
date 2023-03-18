import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import line from "../public/images/line.png";
import Image from "next/image";
import AuthenticationNavbar from "@/components/AuthenticationNavbar";
import Profilesuccessful from "@/components/ProfileSuccesful";
const signuppage4 = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  const [showAddNewNotePopup, setShowAddNewNotePopup] = useState(false);

  return (
    <div>
      <Profilesuccessful isOpen={showAddNewNotePopup} />
      <Box>
        <AuthenticationNavbar />
      </Box>

      <div className="flex flex-col text-left   justify-center lg:px-10 px-5 md:px-0 w-full  md:w-[65%] md:m-auto lg:w-[45%] lg:m-auto ">
        <div>
          <h1 className="text-[#0E0008] text-[30px] md:text-[48px] text-center font-bold">
            Sign Up
          </h1>
          <p className=" font-normal text-[15px] md:text-[18px] text-center  text-[#575757]">
            Complete your registration
          </p>
        </div>
        <div>
          <div className="hidden  md:block absolute top-[60px] left-0 ">
            <Image src={line} alt="line" />
          </div>
        </div>
        <div></div>

        <div className="flex flex-col w-full lg:w-full mt-5">
          <h1 className=" md:text-[20px] text-[15px] font-normal text-[#0E0008]">
            Preferred username
          </h1>
          <input
            className="border border-[#C2C3C8] px-2 py-5 rounded-md mt-2"
            type="text"
            placeholder="codeboyfriend"
          />
        </div>
        <Box>
          <Flex alignItems={"center"} gap={"5px"} py={"10px"} mt={"10px"}>
            <Box
              w={"8px"}
              h={"8px"}
              bg={"#00072D"}
              borderRadius={"100px"}
            ></Box>
            <Text fontSize={"15px"}>
              Usernames are how other Lutees will see you.
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={"5px"} py={"10px"}>
            <Box
              w={"8px"}
              h={"8px"}
              bg={"#00072D"}
              borderRadius={"100px"}
            ></Box>
            <Text fontSize={"15px"}>
              Username must not contain offesive words to any race, religion or
              gender.
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={"5px"} py={"10px"}>
            <Box
              w={"8px"}
              h={"8px"}
              bg={"#00072D"}
              borderRadius={"100px"}
            ></Box>
            <Text fontSize={"15px"}>
              Username should be unique and easy to remember.
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={"5px"} py={"10px"}>
            <Box
              w={"8px"}
              h={"8px"}
              bg={"#00072D"}
              borderRadius={"100px"}
            ></Box>
            <Text fontSize={"15px"}>
              Username can only contain underscore (@,$, #. %, etc are not
              allowed)
            </Text>
          </Flex>
        </Box>
        <div className="flex mt-[30px] md:gap-[60px] gap-[15px]">
          <button className="px-[60px] py-[10px] rounded-full text-black bg-[#1AFFD5] border border-primary bg-primary cursor-pointer mt-[20px] text-[20px] w-full "  onClick={() => setShowAddNewNotePopup(true)}>
            Sign Up
          </button>
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

export default signuppage4;
