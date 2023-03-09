import Image from 'next/image';
import Link from 'next/link';
import { 
    Box,
    Button,
    ButtonGroup,
    Stack
} from "@chakra-ui/react";

const Navbar = () => {
    const loginButton = {
        backgroundColor: 'transparent',
        border: '1px solid #1affd5',
        borderRadius: '10px',
        fontSize: '16px',
        color: '#fff',
        padding: '7px 20px'
    }

    const SignButton = {
        backgroundColor: '#1affd5',
        color: '#00072d',
        border: '1px solid #00072D',
        borderRadius: '10px',
        fontSize: '14px',
        padding: '7px 20px'
    }

    const linkStyle = {
        color: '#fff',
        fontSize: '16px',
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
            width="100"
            height="40"
            />
        </Box>

        {/* Links */}
        <Stack direction='row' spacing={'30'}>
            <Link style={linkStyle} href={'#'}>
                Home
            </Link>
            <Link style={linkStyle} href={'#'}>
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
                cursor={'pointer'}
                variant={'outline'}
                style={loginButton}> Log in </Button>
                <Link style={linkStyle} href="/signup">
                  <Button
                cursor={'pointer'}
                style={SignButton}> Sign in </Button></Link>
          
        </ButtonGroup>
    </Box>
  )
}

export default Navbar