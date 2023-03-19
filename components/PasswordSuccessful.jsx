import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const PasswordSuccessful = ({ isOpen }) => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <>
      <Box
        position={"fixed"}
        w={"100%"}
        h={"100%"}
        top={"0px"}
        left={"0px"}
        backdropBlur={"lg"}
        display={isOpen ? "flex" : "none"}
        justifyContent={"center"}
        placeItems={"center"}
        background={"rgba(0, 0, 0, 0.6)"}
        zIndex={10}
        backdropFilter={"blur(5px)"}
      >
        <div className="flex flex-col bg-[#B3FFF1] w-[90vw] text-center justify-center relative padding[30px] rounded-[10px] max-w-[500px] items-center py-10">
          <h1 className="text-secondary text-[40px] heding-[40px]">
            Password Reset
            <br /> successfully
          </h1>
          <Link style={linkStyle} href="/login">
            <button className="px-[60px] py-[10px] rounded-full text-black  border border-primary cursor-pointer mt-[20px] text-[20px] bg-primary">
              Login Now
            </button>
          </Link>
        </div>
      </Box>
    </>
  );
};

export default PasswordSuccessful;
