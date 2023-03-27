import Image from 'next/image';
import Link from 'next/link';
import { 
    Box,
    ButtonGroup,
    Stack
} from "@chakra-ui/react";
import Button from "./Buttons/NavButtons";
import { useState } from 'react';

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

    let Links = [
        { name: "Home", link: "/" },
        { name: "Features", link: "#" },
        { name: "Faqs", link: "#" },
      ];
    const [click, setClick] = useState(false);

  return (
    <Box id='#navbar' className='mb-4' style={{
        backgroundColor: bgColor,
        padding: pad,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        {/* Logo */}
        <Box className='w-1/3'>
            <Link href={'/'}>
                <Image 
                    src="/Vector.svg"
                    alt="luta logo"
                    width="40"
                    height="40"
                />
            </Link>
        </Box>

        <Box style={{ color: navColor }} className='w-2/3 hidden md:flex items-center justify-between'>
            {/* Links */}
            <Stack className='text-md md:text-[.9rem] lg:text-[1rem]' direction='row' spacing={'30'}>
                <Link style={linkStyle} href={'/'}>
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
                <Link style={linkStyle} href="/login">
                    <Button
                        text={'Log in'}
                        bgColor={'transparent'}
                        textColor={textColor}
                        borderStyle={borderStyle}
                    />
                </Link>
                <Link style={linkStyle} href="/signup">
                    <Button
                        text={'Sign up'}
                        bgColor={'#1affd5'}
                        textColor={'#00072d'}
                        borderStyle={'1px solid #00072D'} 
                    />
                </Link>
            </ButtonGroup>
        </Box>

        <Box onClick={() => setClick(!click)} className='md:hidden text-2xl'>
            <Image 
                src={'/images/menu.svg'}
                alt={"vector"}
                width='30'
                height='30'
                style={{ backgroundColor: color }}
            />
        </Box>

        {click && 
            <Box className='w-full flex flex-col text-md bg-white absolute left-0 top-16 cursor-pointer md:hidden pb-3 pl-3 z-[1] transition-all duration-300 ease-in'>
            <Link className='text-black py-4' href={'/'}>
                Home
            </Link>
            <Link className='text-black py-4' href={'#'}>
                Features
            </Link>
            <Link className='text-black py-4' href={'#'}>
                FAQs
            </Link>
        </Box>
        }
    </Box>
  )
}

export default Navbar