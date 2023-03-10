import {
    Center,
    Heading,
    Text
} from "@chakra-ui/react"

const Mission = () => {
  return (
    <Center sx={{
        bg: '#F5F5F5',
        h: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column',
        textAlign: 'center',
        py: 30,
        px: 20
    }}>
        <Heading className="text-2xl md:text-3xl font-bold mb-4">Our Mission</Heading>
        <Text className="w-[32rem] text-center text-md md:text-xl mx-4">To connect Nigerian students in higher institutions from different cultures and religions together in a secure, modern and fun environment.</Text>
    </Center>
  )
}

export default Mission