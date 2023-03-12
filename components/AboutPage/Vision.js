import {
    Center,
    Heading,
    Text
} from "@chakra-ui/react";
import styles from "styles/Section.module.css";

const Vision = () => {
  return (
    <Center className={styles.vision} sx={{
        h: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column',
        textAlign: 'center',
        py: 30,
        px: 20,
        color: 'white'
    }}>
        <Heading className="text-2xl md:text-3xl font-bold mb-4">Our Vision</Heading>
        <Text className="maxW-[30rem] text-center text-md md:text-xl mx-4">To foster unity among different cultures and religion in Nigeria.</Text>
    </Center>
  )
}

export default Vision