import AuthenticationNavbar from '@/components/AuthenticationNavbar'
import SignInInstead from '@/components/SignInInstead'
import { Box, Button, Flex, HStack, PinInput, PinInputField, Text } from '@chakra-ui/react'
import React from 'react'
import Link from "next/link";

const signuppage3 = () => {
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
            <Box width={("50%", "100%", "100%")}>
              <Text
                textAlign={"center"}
                fontSize={"48px"}
                color={"black"}
                marginTop={"30px"}
              >
                Validation
              </Text>
              <Text textAlign={"center"} marginTop={"5px"} fontSize={"16px"}>
                Enter the OTP sent to your Phone Number
              </Text>
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
              >
                <HStack mt={"20px"}>
                  <PinInput size="lg">
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
                <Flex marginTop={"20px"} textAlign={"center"}>
                  <Text color={"#313232"}>Didn’t Recieve OTP?</Text>
                  <Text color={"#0D806B"}>Resend</Text>
                </Flex>
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
}

export default signuppage3