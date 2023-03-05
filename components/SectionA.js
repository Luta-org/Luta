import {
  Box,
  Stack,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';
import Image from 'next/image';
import Buttons from './Buttons/Button';

const SectionA = () => {
  
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
        <Buttons
          text={'Get Started'}  
          bgColor={'#1affd5'}
          color={'#00072d'}
        />
      </Stack>

      <Box flex={2}>
        <Image 
            src="/images/zachary-nelson-98Elr-LIvD8-unsplash-removebg-preview 2.svg"
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