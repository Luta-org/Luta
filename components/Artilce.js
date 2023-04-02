import {
    Box,
    Text
} from '@chakra-ui/react';
import Buttons from './Buttons/Button';
import Image from 'next/image';
import Link from 'next/link';

const Artilce = () => {
  return (
    <div className='h-[100%] w-full flex flex-col md:flex-row justify-center items-center bg-white pt-6'>
        <Box className='w-[22rem] text-center md:text-left mb-4 md:mb-0'>
            <Text className='text-md md:text-xl mb-4 leading-relaxed font-bold'>Don’t be left out. Join the rest of the Nigerian students to explore what social life really means.</Text>
            <Link href={'/signup'}>
                <Buttons
                    text={'Get started'}
                    bgColor={'#1affd5'}
                    textColor={'#00072d'}
                />
            </Link>
        </Box>

        <Box>
            <Image 
                src={'/images/iPhone 12 Pro (Wooden Hands).svg'}
                alt={"vector"}
                width='200'
                height='200'
            />
        </Box>
    </div>
  )
}

export default Artilce