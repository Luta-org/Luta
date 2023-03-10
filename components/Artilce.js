import {
    Flex,
    Box,
    Text,
    Button
} from '@chakra-ui/react';
import Buttons from './Buttons/Button';
import Image from 'next/image';

const Artilce = () => {

  return (
    <div className='w-full flex justify-center items-center bg-white'>
        <Box>
            <Text>Don’t be left out. Join the rest of the Nigerian students to explore what social life really means.</Text>
            <Buttons
                text={'Get started'}
                bgColor={'#1affd5'}
                textColor={'#00072d'}
            />
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