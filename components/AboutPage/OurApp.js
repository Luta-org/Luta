import {
    Center,
    Heading,
    Text
} from "@chakra-ui/react"

const OurApp = () => {
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
        <Heading>Our App</Heading>
        <Text sx={{
            lineHeight: 1.5,
            maxW: '35rem'
        }}>Our platform is a place for individuals to come together and celebrate their quirks and differences. We believe that everyone has something special to offer, and we intend to create a space where people can connect with others who share their passions and interests.</Text>
    </Center>
  )
}

export default OurApp