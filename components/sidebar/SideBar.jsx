import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";
import home from "../../public/images/home.png";
import search from "../../public/images/search.png";
import messages from "../../public/images/messages.png";
import gg from "../../public/images/gg.png";
import bell from "../../public/images/bell.png";
import navicon from "../../public/images/navicon.png";
import messagee from "../../public/images/messagee.png";
import avater from "../../public/images/avater.png";
import bookmark from "../../public/images/bookmark.png";
import Link from "next/link";



const Topbar = () => {

  const linkStyle = {
    textDecoration: "none",
  };

  return (
    <Flex className="flex-col items-center">
      <div className="py-5 mt-10 cursor-pointer">
        <Link style={linkStyle} href="/home">
          <Image src={home} alt="home icon" />
        </Link>
      </div>
      <div className="py-3 cursor-pointer">
        <Image src={search} alt="search icon" />
      </div>
      <div className="py-3 cursor-pointer">
        <Image src={messages} alt="message icon" />
      </div>

      <div className="py-3 cursor-pointer">
        <Image src={gg} alt="gg icon" />
      </div>
      <div className="py-3 cursor-pointer">
        <Image src={bookmark} alt="gg icon" />
      </div>
      <div className="py-3 cursor-pointer">
        <Image src={bell} alt="bell icon" />
      </div>
      <div className="py-3 cursor-pointer">
        <Image src={navicon} alt="nav icon" />
      </div>
      <div className="py-3 cursor-pointer">
        <Image src={avater} alt="avater icon" />
      </div>
      <div className="mt-12 cursor-pointer">
        <Image src={messagee} alt="messagee icon" />
      </div>
    </Flex>
  );
};

export default Topbar;
