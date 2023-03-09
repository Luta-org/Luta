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
      height: '90vh',
      color: '#fff',
    }}>
      <Stack direction={'column'} spacing={4} style={{
        width: '50vw',
        alignSelf: 'center'
      }} >
        <Heading sx={{
          fontSize: '4.5rem',
          lineHeight: '.9em'
        }}>Connect across the world</Heading>
        <Text sx={{
          w: '35vw',
          fontSize: '1.2rem',
          lineHeight: '1.3em',
          py: '1.5rem'
        }}>Connect with fellow students across higher institutions in Nigeria without any hurdles.</Text>
        <Buttons
          text={'Get Started'}  
          bgColor={'#1affd5'}
          color={'#00072d'}
        />
      </Stack>

      <Box sx={{
        w: '50vh'
      }}>
        <Image 
            src="/images/zachary-nelson-98Elr-LIvD8-unsplash-removebg-preview 2.svg"
            alt="luta logo"
            width="100"
            height="40"
            style={{
              height: '100%',
              width: '100%'
            }}
          />
      </Box>
    </Flex>
  )
}

export default SectionA