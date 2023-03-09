import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react'

const SignInInstead = () => {
     const linkStyle = {
       textDecoration: "none",
     };
  return (
    
    <div>
      <Box>
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          paddingTop={"250px"}
          paddingLeft={"100px"}
        >
          <Text
            fontSize={40}
            color={"white"}
            textAlign={"center"}
            lineHeight={"40px"}
          >
            Have An account
            <br /> Already?
          </Text>
          <Link style={linkStyle} href="/signuppage2">
            <Button
              w={"250px"}
              py={12}
              color={"white"}
              borderRadius={"100px"}
              borderColor={"#1AFFD5"}
              backgroundColor={"transparent"}
              outline={"none"}
              cursor="pointer"
              mt="25px"
            >
              <Text fontSize={"25px"}>Sign In instead</Text>
            </Button>
          </Link>
        </Flex>
      </Box>
    </div>
  );
}

export default SignInInstead
