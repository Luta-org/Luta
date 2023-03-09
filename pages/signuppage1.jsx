import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState, React } from "react";
import SocialBtn from "../components/molecule/SocialBtn";
import line from "../public/images/line.png";
import Image from "next/image";

const SignUpPage1 = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <Box width={("50%", "100%", "100%")}>
      <Text
        textAlign={"center"}
        fontSize={"48px"}
        color={"black"}
        marginTop={"30px"}
      >
        Sign Up
      </Text>
      <Text textAlign={"center"} marginTop={"5px"} fontSize={"20px"}>
        Kindly fill your details to register on Luta
      </Text>
      <Box position={"absolute"} top={"60px"}>
        <Image src={line} />
      </Box>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        direction={"column"}
      >
        <Flex marginTop={"20px"} direction={"column"}>
          <Text fontSize={"20px"}>Preferred username</Text>
          <Input
            placeholder={"codeboyfriend"}
            px={10}
            py={15}
            w={["100px", "300px", "400px"]}
          />
        </Flex>

        <Flex marginTop={"10px"} direction={"column"}>
          <Text fontSize={"20px"}>Phone Number</Text>
          <Input placeholder={"John Doe"} px={10} py={15} w={"400px"} />
        </Flex>
        <div>
          <Link style={linkStyle} href="/signuppage2">
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
              <Text fontSize={"25px"}>Next</Text>
            </Button>
          </Link>
        </div>
        <Flex marginTop={"20px"} alignItems={"center"} gap={"15px"}>
          <Box backgroundColor={"#555A73"} w={"140px"} h={"1px"}></Box>
          <Text color={"#313232"}>Alternatively</Text>
          <Box backgroundColor={"#555A73"} w={"140px"} h={"1px"}></Box>
        </Flex>
        <Box marginTop={"10px"}>
          <SocialBtn />
        </Box>
      </Flex>
    </Box>
  );
};

export default SignUpPage1;
