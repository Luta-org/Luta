import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import line from "../public/images/line.png";
import Image from "next/image";
import SignInInstead from "@/components/SignInInstead";
import AuthenticationNavbar from "@/components/AuthenticationNavbar";
const signuppage4 = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  return (
    <div>
      <div>
        <Box>
          <AuthenticationNavbar />
        </Box>

        <Flex width={"100%"}>
          <Box width={"50%"}>
            <Box width={("50%", "90%", "100%")}>
              <Text
                textAlign={"center"}
                fontSize={"48px"}
                color={"black"}
                marginTop={"30px"}
              >
                Sign Up
              </Text>
              <Text textAlign={"center"} marginTop={"5px"} fontSize={"16px"}>
                Complete your registration
              </Text>
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
                    py={18}
                    w={["100px", "300px", "500px"]}
                  />
                </Flex>
                <Box>
                  <Flex alignItems={"center"} gap={"5px"} py={"10px"}>
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
                      Username must not contain offesive words to any race,
                      religion or gender.
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
                      Username can only contain underscore (@,$, #. %, etc are
                      not allowed)
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Flex marginTop={"200px"} justifyContent={"center"} gap={"60px"}>
                <Link style={linkStyle} href="/signuppage2">
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
                <Link style={linkStyle} href="/signuppage4">
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
            </Box>
          </Box>
          <Box w="50%" h="100vh" backgroundImage="url('/images/guybg.png')">
            <SignInInstead />
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default signuppage4;
