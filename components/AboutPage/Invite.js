import {
    Box,
    Heading,
    Text
} from "@chakra-ui/react";
import Buttons from "../Buttons/Button";

const Invite = () => {
  return (
    <Box className="h-20vh flex flex-col justify-center items-center">
        <Heading>Come join us and be part of something special.</Heading>
        <Text>See you on the inside</Text>
        <Buttons 
          text={'Join Us'}  
          bgColor={'#1affd5'}
          color={'#00072d'}
        />
    </Box>
  )
}

export default Invite