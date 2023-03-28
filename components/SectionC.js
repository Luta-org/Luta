import {
    Box,
    Flex,
    Center,
    Text
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/Section.module.css';

const SectionC = () => {
  return (
    <Flex className={styles.sectionc} sx={{
        my: '1rem',
        alignItems: 'center',
    }}>
        <Center className='w-1/2'>
            <Text className='text-md md:text-xl pl-4' sx={{
                color: '#fff'
            }}>Luta cares about your privacy. Connect across schools without using your phone number.</Text>
        </Center>

        <Box className='w-1/2 flex justify-start'>
            <Image
                src={"/images/iPhone 13 Mockup label.svg"}
                alt="phone"
                width="1"
                height="4"
                className={"w-[10rem] md:w-[14rem] md:translate-x-[2rem] lg:translate-x-[10rem]"}
            />
        </Box>
    </Flex>
  )
}

export default SectionC