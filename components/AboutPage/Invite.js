import {
  Box,
  Heading,
  Text
} from "@chakra-ui/react";
import { 
  FaTwitter,
  FaLinkedin,
  FaFacebookSquare 
} from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import Link from 'next/link';
import Buttons from "../Buttons/Button";

const Invite = () => {
  const linkStyle = {
    color: '#00072D',
    textDecoration: 'none',
  }

  return (
    <Box sx={{
      h: '100%'
    }} className="w-full pb-16 pt-4 flex flex-col justify-center items-center">
        <Heading className="text-md md:text-xl text-center font-bold my-4 mx-4">Come join us and be part of something special.</Heading>
        <Text className="mb-4">See you on the inside</Text>
        <Buttons 
          text={'Join Us'}  
          bgColor={'#1affd5'}
          color={'#00072d'}
        />

        <Box className="mt-6">
          <Heading className="text-xl md:text-2xl text-center font-bold mb-4 mx-4">Follow us</Heading>

          <div className='w-full flex justify-between text-2xl'>
            <Link style={linkStyle} href={'#'}>
                <FaTwitter />
            </Link>
            <Link style={linkStyle} href={'#'}>
                <FaLinkedin />
            </Link>
            <Link style={linkStyle} href={'#'}>
                <MdMail />
            </Link>
            <Link style={linkStyle} href={'#'}>
                <FaFacebookSquare />
            </Link>
        </div>
        </Box>
    </Box>
  )
}

export default Invite