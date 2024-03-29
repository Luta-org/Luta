import {
    Center,
    Heading,
    Text
} from "@chakra-ui/react"

const About = () => {
  return (
    <Center className="pt-10 md:pt-0 pb-6" sx={{
        h: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDir: 'column',
        textAlign: 'center',
        my: '1.5rem'
    }}>
        <Heading className="text-2xl font-bold mb-2">About Luta</Heading>
        <Text className="md:text-md text-lg px-4 md:px-0" sx={{
            lineHeight: 1.2,
            maxW: '35rem',
        }}>Luta is a social media platform that connects Nigerian students. It doesn’t matter what you find interesting, there is always a spot in Luta that brings the fun part of you out.</Text>
    </Center>
  )
}

export default About