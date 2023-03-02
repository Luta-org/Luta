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
        <Box>
            <Image
                src={"/images/iPhone 12 Graphite Pro Top View Mockup label.svg"}
                alt="phone"
                width="1"
                height="4"
                style={{
                    height: '75%',
                    width: '70%',
                    border: '.6rem solid #00072D',
                    borderRadius: '3rem'
                }}
            />
        </Box>
        
        <Center>
            <Text sx={{
                color: '#fff',
                fontSize: '1.3rem',
                w: '25rem'
            }}>Relieve the stress of academics with bants on Luta</Text>
        </Center>

    </Flex>
  )
}

export default SectionB