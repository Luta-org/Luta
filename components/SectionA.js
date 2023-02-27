import {
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Flex
} from '@chakra-ui/react';
import Image from 'next/image';

const SectionA = () => {
  const buttonStyle = {
    backgroundColor: '#1affd5',
    color: '#00072d',
    border: '1px solid #00072D',
    borderRadius: '15px',
    fontSize: '14px',
    padding: '7px 20px',
    width: '120px',
    cursor: 'pointer'
  
  }
  return (
    <Flex style={{
      color: '#fff',
    }}>
      <Stack direction={'column'} spacing={4} style={{
        alignSelf: 'center'
      }} >
        <Heading sx={{
          fontSize: '35px'
        }}>Connect across the world</Heading>
        <Text>Connect with fellow students across higher institutions in Nigeria without any hurdles.</Text>
        <Button style={buttonStyle}>Get Started</Button>
      </Stack>

      <Box flex={2}>
        <Image 
            src="/zachary-nelson-98Elr-LIvD8-unsplash-removebg-preview 2.svg"
            alt="luta logo"
            width="100"
            height="40"
            style={{
              height: '100%',
              width: '80%'
            }}
          />
      </Box>
    </Flex>
  )
}

export default SectionA