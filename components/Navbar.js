import Image from 'next/image';
import Link from 'next/link';
import { 
    Box,
    ButtonGroup,
    Stack,
    Text
} from "@chakra-ui/react";
import Button from "./Buttons/NavButtons";
import {
    GiDiceSixFacesFour
} from 'react-icons/gi'

const Navbar = ({
    bgColor,
    color,
    pad,
    navColor,
    textColor,
    borderStyle
}) => {
    const linkStyle = {
        textDecoration: 'none'
    }

  return (
    <Box className='mb-4' style={{
        backgroundColor: bgColor,
        padding: pad,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        {/* Logo */}
        <Box className='w-1/3'>
            <Image 
                src="/Vector.svg"
                alt="luta logo"
                width="40"
                height="40"
            />
        </Box>

        <Box style={{ color: navColor }} className='w-2/3 hidden md:flex items-center justify-between'>
            {/* Links */}
            <Stack className='text-md md:text-[.9rem] lg:text-[1rem]' direction='row' spacing={'30'}>
                <Link style={linkStyle} href={'#'}>
                    Home
                </Link>
                <Link style={linkStyle} href={'#'}>
                    Features
                </Link>
                <Link style={linkStyle} href={'#'}>
                    FAQs
                </Link>
            </Stack>

            {/* Buttons */}
            <ButtonGroup gap={'4'} >
                <Button
                    text={'Log in'}
                    bgColor={'transparent'}
                    textColor={textColor}
                    borderStyle={borderStyle}
                />

                <Button
                    text={'Sign up'}
                    bgColor={'#1affd5'}
                    textColor={'#00072d'}
                    borderStyle={'1px solid #00072D'} 
                />
            </ButtonGroup>
        </Box>

        <Box className='md:hidden text-2xl'>
            <Image 
                src={'/images/menu.svg'}
                alt={"vector"}
                width='30'
                height='30'
                style={{ backgroundColor: color }}
            />
        </Box>
    </Box>
  )
}

export default Navbar