import React from "react"
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import message from "../public/images/messages.png";
import bell from "../public/images/bigbell.png";
import profile from "../public/images/profiledropdown.png";
import SearchBar from "../components/molecule/SearchBar";

const Topbar = () =>{
    return (
      <Flex justifyContent={"space-between"} alignItems={"center"} className="px-10 py-5">
        <Flex className="items-center gap-2">
          <div >
            <Link href={"/"}>
              <Image src="/Vector.svg" alt="luta logo" width="40" height="40" />
            </Link>
          </div>
          <h1 className="text-black text-[30px]">LUTA</h1>
        </Flex>
        <Box>
         <SearchBar />
        </Box>
        <div className="flex items-center gap-5">
          <div className="cursor-pointer">
            <Image src={message} alt="GroupLogo" />
          </div>
        <div className="cursor-pointer">
            <Image src={bell} alt="GroupLogo" />
          </div>
          <div className="cursor-pointer">
            <Image src={profile} alt="GroupLogo"  />
          </div>
        </div>
      </Flex>
    );
}

export default Topbar