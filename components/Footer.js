import {
    Box,
    Stack,
    Heading,
    Text,
    Flex
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowUp } from 'react-icons/io';
import { 
    FaTwitter,
    FaLinkedin 
} from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import styles from '../styles/Section.module.css';

const Footer = () => {
    const linkStyle = {
        color: '#1AFFD5',
        fontSize: '16px',
        textDecoration: 'none',
        fontSize: '.8rem'
    }

  return (
    <Box sx={{
        backgroundColor: '#00072D',
        p: ['1rem 2rem', '2rem 4rem'],
        color: '#fff'
    }}>
        <Box className='flex justify-between'>
            <Stack direction={'column'} spacing={20}>
                <Stack direction={'row'} spacing={5}>
                    <Image 
                    src="/Vector.svg"
                    alt="luta logo"
                    width="40"
                    height="40"
                    />

                    <Heading>LUTA</Heading>
                </Stack>

                <Text sx={{
                    fontSize: '.7rem'
                }}>Connecting Students</Text>

                <Flex sx={{
                    fontSize: '.9rem',
                    justifyContent: 'space-between'
                }}>
                    <Link style={linkStyle} href={'#'}>
                        <FaTwitter />
                    </Link>
                    <Link style={linkStyle} href={'#'}>
                        <FaLinkedin />
                    </Link>
                    <Link style={linkStyle} href={'#'}>
                        <MdMail />
                    </Link>
                </Flex>
            </Stack>

            {/* Scroll Button */}
            <Box className={styles.scroll} sx={{
                height: '3.3rem',
                width: '3.3rem',
                textAlign: 'center',
                lineHeight: '-1rem',
                backgroundColor: '#00072D',
                border: '1px solid #fff',
                p: '.2rem',
                borderRadius: '100%',
                transform: 'translateY(-80%)',
                cursor: 'pointer'
            }}>
                <IoIosArrowUp />
                <Text sx={{
                    fontSize: '.5rem'
                }}>Scroll up</Text>
            </Box>
            

            {/* Links */}
            <Stack direction='column' spacing={'10'} sx={{
                textAlign: 'center'
            }}>
                <Link style={linkStyle} href={'#'}>
                    About Us
                </Link>
                <Link style={linkStyle} href={'#'}>
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

        <Text sx={{
            fontSize: '.7rem',
            color: '#808396',
            textAlign: 'center'
        }}>&copy; Luta 2023 | All right reserved</Text>
    </Box>
  )
}

export default Footer