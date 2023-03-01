import {
    Box,
    Flex
} from '@chakra-ui/react';
import Image from 'next/image';

const SectionB = () => {
  return (
    <Flex style={{
        width: '100%',
        backgroundImage: '/Rectangle 1170.svg'
    }}>
        <Box>
            <Image
                src={"/images/iPhone 12 Graphite Pro Top View Mockup label.svg"}
                alt="phone"
                width="1"
                height="4"
                style={{
                    height: '75%',
                    width: '70%',
                    border: '.6rem solid #00072D',
                    borderRadius: '3rem'
                }}
            />
        </Box>
    </Flex>
  )
}

export default SectionB