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
        h: '45vh',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    }}>
        <Box>
            <Heading>About Us</Heading>
        </Box>
        <Box w={[300, 400, 500]} p={[10, 30, 50]} sx={{
            textAlign: 'center'
        }}>
            <Text>Luta is a social networking platform created to help Nigerian students in higher institutions connect across different schools in the country.</Text>
        </Box>
    </Flex>
  )
}

export default AboutFrame