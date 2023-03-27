import {
    Box,
    Stack,
    Heading,
    Text
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowUp } from 'react-icons/io';
import { 
    FaTwitter,
    FaLinkedin 
} from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

const Footer = () => {
    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
    }

  return (
    <Box className='relative' sx={{
        backgroundColor: '#00072D',
        p: ['1rem 2rem'],
        color: '#fff'
    }}>
        <Box className='w-full flex flex-col md:flex-row justify-between items-center md:items-start'>
            <Stack className='flex flex-col items-center md:items-start' direction={'column'} spacing={12}>
                <Box className='flex absolute top-[-15px] right-12 md:right-18 md:hidden flex-col justify-center items-center' sx={{
                    height: '3.5rem',
                    width: '3.5rem',
                    textAlign: 'center',
                    lineHeight: '-1rem',
                    backgroundColor: '#00072D',
                    border: '2px solid #fff',
                    p: '.2rem',
                    borderRadius: '100%',
                    cursor: 'pointer'
                }}>
                    <IoIosArrowUp />
                    <Text sx={{
                        fontSize: '.6rem'
                    }}>Scroll up</Text>
                </Box>

                <Stack className='w-26 h-full flex justify-between items-center' direction={'row'} spacing={5}>
                    <Link href={'/'}>
                        <Image 
                            src="/Vector.svg"
                            alt="luta logo"
                            width="40"
                            height="40"
                        />
                    </Link>

                    <Heading className='text-xl font-bold'>LUTA</Heading>
                </Stack>

                <Text className='text-md'>Connecting Students</Text>

                <div className='hidden w-full md:flex justify-between text-xl'>
                    <Link style={linkStyle} href={'#'}>
                        <FaTwitter />
                    </Link>
                    <Link style={linkStyle} href={'#'}>
                        <FaLinkedin />
                    </Link>
                    <Link style={linkStyle} href={'#'}>
                        <MdMail />
                    </Link>
                </div>
            </Stack>

            {/* Scroll Button */}
            <Link href="#">
                <Box className='hidden md:flex flex-col justify-center items-center' sx={{
                    height: '3.5rem',
                    width: '3.5rem',
                    textAlign: 'center',
                    lineHeight: '-1rem',
                    backgroundColor: '#00072D',
                    border: '2px solid #fff',
                    p: '.2rem',
                    borderRadius: '100%',
                    transform: 'translateY(-70%)',
                    cursor: 'pointer'
                }}>
                    <IoIosArrowUp />
                    <Text sx={{
                        fontSize: '.6rem'
                    }}>Scroll up</Text>
                </Box>
            </Link>
            

            {/* Links */}
            <Stack className='text-md my-6 md:my-0 leading-8' direction='column' spacing={'10'} sx={{
                textAlign: 'center'
            }}>
                <Link style={linkStyle} href={'/about'}>
                    About Us
                </Link>
                <Link style={linkStyle} href={'/contact'}>
                    Contact Us
                </Link>
                <Link style={linkStyle} href={'#'}>
                    Features
                </Link>
                <Link style={linkStyle} href={'#'}>
                    FAQs
                </Link>
                <Link style={linkStyle} href={'#'}>
                    Privacy Policy
                </Link>
            </Stack>
        </Box>

        <div className='w-full md:hidden flex items-center justify-center text-xl my-3'>
            <Link className='mx-6' style={linkStyle} href={'#'}>
                <FaTwitter />
            </Link>
            <Link className='mx-6' style={linkStyle} href={'#'}>
                <FaLinkedin />
            </Link>
            <Link className='mx-6' style={linkStyle} href={'#'}>
                <MdMail />
            </Link>
        </div>

        

        <Text className='text-sm mt-6' sx={{
            color: '#808396',
            textAlign: 'center'
        }}>&copy; Luta 2023 | All right reserved</Text>
    </Box>
  )
}

export default Footer