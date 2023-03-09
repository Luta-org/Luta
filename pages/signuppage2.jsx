import { Text, Box, Flex, Button, Input, Checkbox } from "@chakra-ui/react";
import React from "react";
import AuthenticationNavbar from "@/components/AuthenticationNavbar";
import SignUpPage1 from "@/pages/SignUpPage1";
import SignInInstead from "@/components/SignInInstead";
import SocialBtn from "@/components/molecule/SocialBtn";
import Link from "next/link";
import line from "../public/images/line.png";
import Image from "next/image";

const SignUpPage2 = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div>
      <Box>{/* <AuthenticationNavbar /> */}</Box>

      <Flex width={"100%"}>
        <Box width={"50%"}>
          <Box width={("50%", "100%", "100%")}>
            <Text
              textAlign={"center"}
              fontSize={"48px"}
              color={"black"}
              marginTop={"30px"}
            >
              Sign Up
            </Text>
            <Text textAlign={"center"} marginTop={"5px"} fontSize={"16px"}>
              Fill the registration form to join the community of LUTA students
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
                <Text fontSize={"20px"}>Name of Institution</Text>
                <Input
                  placeholder={"codeboyfriend"}
                  px={10}
                  py={18}
                  w={["100px", "300px", "500px"]}
                />
              </Flex>

              <Flex marginTop={"20px"} direction={"column"}>
                <Text fontSize={"20px"}>Password</Text>
                <Input
                  type={"password"}
                  placeholder={"*****"}
                  px={10}
                  py={18}
                  w={"500px"}
                />
                <Flex justify={"space-between"} fontSize={"14px"}>
                  <Text color={"#00072D"}>Uppercase</Text>
                  <Text color={"#00072D"}>Lowercase</Text>
                  <Text color={"#ADADAD"}>Special character</Text>
                  <Text color={"#00072D"}>Number</Text>
                  <Text color={"#00072D"}>Min 8 characters</Text>
                </Flex>
              </Flex>
              <Flex marginTop={"20px"} direction={"column"}>
                <Text fontSize={"20px"}>Confirm Password</Text>
                <Input
                  type={"password"}
                  placeholder={"*****"}
                  px={10}
                  py={18}
                  w={"500px"}
                />
              </Flex>
              <Flex gap={"5px"} textAlign={"left"} marginTop={"10px"}>
                <Checkbox />
                <Flex>
                  By signing up, you agree to our{" "}
                  <Text color={"#1AFFD5"}>terms and conditions. .</Text>
                </Flex>
              </Flex>
              <Flex gap={"60px"}>
                <Link style={linkStyle} href="/signuppage1">
                  <Button
                    w={"200px"}
                    py={10}
                    color={"black"}
                    borderRadius={"100px"}
                    borderColor={"#00072D"}
                    backgroundColor={"white"}
                    outline={"none"}
                    cursor="pointer"
                    mt="25px"
                  >
                    <Text fontSize={"25px"}>Back</Text>
                  </Button>
                </Link>
                <Link style={linkStyle} href="/signuppage3">
                  <Button
                    w={"200px"}
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
              </Flex>
            </Flex>
          </Box>
        </Box>
        <Box w="50%" h="100vh" backgroundImage="url('/images/guybg.png')">
          <SignInInstead />
        </Box>
      </Flex>
    </div>
  );
};

export default SignUpPage2;
