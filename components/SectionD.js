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
        my: '1rem',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }}>
        <Box>
            <Image
                src={"/images/iPhone 13 Mockup label (1).svg"}
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
                fontSize: '1.5rem',
                w: '25rem'
            }}>Get into chat rooms of any topic you’re interested in.</Text>
        </Center>

    </Flex>
  )
}

export default SectionD