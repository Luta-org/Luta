import {
    Box,
    Flex,
    Center,
    Text
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/Section.module.css';

const SectionD = () => {
  return (
    <Flex className={styles.sectionb} sx={{
        my: '1.5rem',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }}>
        <Box className='w-1/2 flex justify-end'>
            <Image
                src={"/images/iPhone 13 Mockup label (1).svg"}
                alt="phone"
                width="1"
                height="4"
                className={"w-[10rem] md:w-[14rem] md:-translate-x-[2rem] lg:-translate-x-[10rem]"}
            />
        </Box>
        
        <Center className='w-1/2'>
            <Text className='text-md md:text-xl md:w-25px pl-6' sx={{
                color: '#fff',
            }}>Get into chat rooms of any topic you’re interested in.</Text>
        </Center>

    </Flex>
  )
}

export default SectionD