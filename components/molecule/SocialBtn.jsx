import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import google from "../../public/images/google.png"
import facebook from "../../public/images/facebook.png";
import Image from "next/image";

const SocialBtn = () => {
  return (
    <div>
      <Flex gap={"10px"}>
        <Button
          cursor={"pointer"}
          px={"20px"}
          py={"15px"}
          borderRadius={"100px"}
          backgroundColor={"white"}
        >
          <Flex alignItems={"center"} gap={"10px"}>
            <Image src={google} />
            <Text fontSize={"12px"}>Continue with Google</Text>
          </Flex>
        </Button>
        <Button
          px={"20px"}
          py={"15px"}
          borderRadius={"100px"}
          backgroundColor={"white"}
          cursor={"pointer"}
        >
          <Flex alignItems={"center"} gap={"10px"}>
            <Image src={facebook} />
            <Text fontSize={"12px"}>Continue with Facebook</Text>
          </Flex>
        </Button>
      </Flex>
    </div>
  );
}

export default SocialBtn
