import {
    Box,
    Flex,
    Center,
    Text
} from '@chakra-ui/react';
import Image from 'next/image';
import styles from '../styles/Section.module.css';

const SectionB = () => {
  return (
    <Flex className={styles.sectionb} sx={{
        my: '1rem',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }}>
        <Box className='w-1/2 flex justify-end'>
            <Image
                src={"/images/iPhone 12 Graphite Pro Top View Mockup label.svg"}
                alt="phone"
                width="1"
                height="4"
                style={{
                    // height: '75%',
                    // width: '70%',
                    // border: '.6rem solid #00072D',
                    // borderRadius: '3rem'
                }}
                className={"w-[10rem] md:w-[14rem] md:-translate-x-32"}            
            />
        </Box>
        
        <Center className='w-1/2'>
            <Text className='text-md md:text-xl md:w-25px pl-6' sx={{
                color: '#fff',
            }}>Relieve the stress of academics with bants on Luta</Text>
        </Center>
    </Flex>
  )
}

export default SectionB