import {
    Flex,
    Box,
    Heading,
    Text
} from "@chakra-ui/react";
import styles from '@/styles/Section.module.css';

const AboutFrame = () => {
  return (
    <Flex className={styles.aboutframe} sx={{
        w: '100vw',
        h: '70vh',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    }}>
        <Box>
            <Heading className="text-2xl md:text-3xl font-bold">About Us</Heading>
        </Box>
        <Box className="maxW-[30rem] text-center text-md md:text-xl mx-6">
            <Text>Luta is a social networking platform created to help Nigerian students in higher institutions connect across different schools in the country.</Text>
        </Box>
    </Flex>
  )
}

export default AboutFrame