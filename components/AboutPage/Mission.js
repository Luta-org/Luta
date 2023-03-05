import {
    Center,
    Heading,
    Text
} from "@chakra-ui/react"

const Mission = () => {
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
        <Heading>Our Mission</Heading>
        <Text sx={{
            lineHeight: 1.5,
            maxW: '35rem'
        }}>To connect Nigerian students in higher institutions from different cultures and religions together in a secure, modern and fun environment.</Text>
    </Center>
  )
}

export default Mission