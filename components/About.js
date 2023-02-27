import {
    Center,
    Heading,
    Text
} from "@chakra-ui/react"

const About = () => {
  return (
    <Center sx={{
        h: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column',
        textAlign: 'center',
        my: '1.5rem'
    }}>
        <Heading>About Luta</Heading>
        <Text sx={{
            lineHeight: 1.5,
            maxW: '35rem'
        }}>Luta is a social media platform that connects Nigerian students. It doesn’t matter what you find interesting, there is always a spot in Luta that brings the fun part of you out.</Text>
    </Center>
  )
}

export default About