import {
    Center,
    Heading,
    Text
} from "@chakra-ui/react"

const Vision = () => {
  return (
    <Center sx={{
        bg: '#F5F5F5',
        h: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column',
        textAlign: 'center',
        py: 30,
        px: 20
    }}>
        <Heading>Our Vision</Heading>
        <Text sx={{
            lineHeight: 1.5,
            maxW: '35rem'
        }}>To foster unity among different cultures and religion in Nigeria.</Text>
    </Center>
  )
}

export default Vision