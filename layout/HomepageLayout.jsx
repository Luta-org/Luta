import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "../components/sidebar/SideBar";
import Topbar from "../components/Topbar";

const HomepageLayout = ({ children }) => {
  return (
    <Flex color={"white"}>
      <Box
        w="13%"
        position={"fixed"}
        minH={"100vh"}
        left={0}
        className="bg-[#C2C3C8]"
      >
        <SideBar />
      </Box>
      <Box w={"100%"} ml={"13%"}>
        <div className="h-[100px] border-r-[#C2C3C8]">
          <Topbar />
        </div>
        <Flex bg="white" minH={"90vh"}>
          {children}
        </Flex>
      </Box>
    </Flex>
  );
};

export default HomepageLayout;