import {
    Flex,
    Box,
    Text,
    Button
} from '@chakra-ui/react';

const Artilce = () => {
    const buttonStyle = {
        backgroundColor: '#1affd5',
        color: '#00072d',
        borderRadius: '15px',
        fontSize: '14px',
        padding: '7px 20px',
        width: '120px',
        cursor: 'pointer',
        fontWeight: '500'
      }

  return (
    <Flex sx={{
        backgroundColor: '#fff',
        margin: '0 2rem',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <Box>
            <Text>Don’t be left out. Join the rest of the Nigerian students to explore what social life really means.</Text>
            <Button style={buttonStyle}>Get Started</Button>
        </Box>
    </Flex>
  )
}

export default Artilce