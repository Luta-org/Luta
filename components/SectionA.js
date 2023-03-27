import {
  Box,
  Stack,
  Heading,
  Text,
  Flex
} from '@chakra-ui/react';
import Image from 'next/image';
import Buttons from './Buttons/Button';
import Link from 'next/link';

const SectionA = () => {
  
  return (
    <div className='w-full h:90vh flex sm:justify-center md:justify-between items-center flex-col md:flex-row'>
      <Stack className='text-center md:text-left' direction={'column'} spacing={4}>
        <Heading className='text-2xl text-white md:text-4xl lg:text-5xl font-bold'>Connect across the country.</Heading>
        <Text className='text-xl text-white md:text-2xl' sx={{
          fontSize: '1.2rem',
          lineHeight: '1.3em',
          py: '1.5rem'
        }}>Connect with fellow students across higher institutions in Nigeria without any hurdles.</Text>
        <Link href={'/signup'}>
          <Buttons
            text={'Get Started'}  
            bgColor={'#1affd5'}
            color={'#00072d'}
          />
        </Link>
      </Stack>

      <Box sx={{
        w: 'full',
        transform: 'translateY(20%)',
        borderRadius: '10px'
      }} className='md:hidden bg-white'>
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
    </div>
  )
}

export default SectionA