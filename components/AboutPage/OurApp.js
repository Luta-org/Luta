import {
    Center,
    Heading,
    Text
} from "@chakra-ui/react"

const OurApp = () => {
  return (
    <Center sx={{
        bg: '#F5F5F5',
        h: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column',
        textAlign: 'center',
    }}>
        <Heading className="text-2xl md:text-3xl font-bold mb-4">Our App</Heading>
        <Text className="maxW-[30rem] text-center text-md md:text-xl mx-4">Our platform is a place for individuals to come together and celebrate their quirks and differences. We believe that everyone has something special to offer, and we intend to create a space where people can connect with others who share their passions and interests.</Text>
    </Center>
  )
}

export default OurApp