import Image from 'next/image';
import Link from 'next/link';
import { 
    Box,
    ButtonGroup,
    Stack
} from "@chakra-ui/react";
import Button from "./Buttons/NavButtons"

const Navbar = () => {
    const linkStyle = {
        color: '#fff',
        fontSize: '1.2rem',
        textDecoration: 'none'
    }

  return (
    <Box style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        {/* Logo */}
        <Box>
            <Image 
                src="/Vector.svg"
                alt="luta logo"
                width="50"
                height="40"
            />
        </Box>

        {/* Links */}
        <Stack direction='row' spacing={'30'}>
            <Link style={linkStyle} href={'#'}>
                Home
            </Link>
            <Link style={linkStyle} href={'/about'}>
                About
            </Link>
            <Link style={linkStyle} href={'#'}>
                Features
            </Link>
            <Link style={linkStyle} href={'#'}>
                FAQs
            </Link>
            <Link style={linkStyle} href={'#'}>
                Contact Us
            </Link>
        </Stack>

        {/* Buttons */}
        <ButtonGroup gap={'4'} >
            <Button
                text={'Log in'}
                bgColor={'transparent'}
                textColor={'#fff'}
                borderStyle={'1px solid #fff'}
            />

            <Button
                text={'Sign up'}
                bgColor={'#1affd5'}
                textColor={'#00072d'}
                borderStyle={'1px solid #00072D'} 
            />
        </ButtonGroup>
    </Box>
  )
}

export default Navbar