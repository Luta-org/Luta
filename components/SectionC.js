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
        justifyContent: 'space-evenly'
    }}>
        <Center>
            <Text sx={{
                color: '#fff',
                fontSize: '1.3rem',
                w: '25rem'
            }}>Luta cares about your privacy. Connect across schools without using your phone number.</Text>
        </Center>

        <Box>
            <Image
                src={"/images/iPhone 13 Mockup label.svg"}
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
    </Flex>
  )
}

export default SectionC