import {
    Box,
    Heading,
    Text,
    Flex,
    Stack
} from '@chakra-ui/react';

import { IoMdLock } from 'react-icons/io';
import { HiOutlineChatAlt2 } from 'react-icons/hi'

const Features = () => {
  return (
    <Box sx={{
        backgroundColor: '#F5F5F5',
        p: '1rem 2rem',
        textAlign: 'center'
    }}>
        {/* Heading */}
        <Heading className='text-2xl font-bold'>Features</Heading>

        {/* Sub Heading */}
    <Text className='text-center text-lg' sx={{
            mb: '1.5rem'
        }}>Explore the numerous features Luta have to offer.</Text>

        {/* Boxes */}
        <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center'>
            <Flex style={{
                width: '15rem',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '1px 1px 5px #00072D',
            }}>
                <Box style={{
                        height: '2.5rem',
                        width: '2.5rem',
                        fontSize: '1.2rem',
                        backgroundColor: '#00072D',
                        color: '#fff',
                        padding: '.5rem .7rem',
                        borderRadius:'100%',
                        transform: 'translateY(-80%)'
                    }}>
                    <Text><IoMdLock /></Text>
                </Box>

                <Heading sx={{
                    fontSize: '1rem'
                }}>Student Forums</Heading>
                <Text sx={{
                    fontSize: '.8rem'
                }}>Distance shouldn’t be a barrier to meet other students online</Text>
            </Flex>

            <Flex style={{
                width: '15rem',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '1px 1px 5px #00072D',
            }}>
                <Box style={{
                        height: '2.5rem',
                        width: '2.5rem',
                        fontSize: '1.2rem',
                        backgroundColor: '#00072D',
                        color: '#fff',
                        padding: '.5rem .7rem',
                        borderRadius:'100%',
                        transform: 'translateY(-80%)'
                    }}>
                    <Text><IoMdLock /></Text>
                </Box>

                <Heading sx={{
                    fontSize: '1rem'
                }}>Secured Platform</Heading>
                <Text sx={{
                    fontSize: '.8rem'
                }}>Connect with student across the country without any fear.</Text>
            </Flex>

            <Flex style={{
                width: '15rem',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '1px 1px 5px #00072D',
            }}>
                <Box style={{
                        height: '2.5rem',
                        width: '2.5rem',
                        fontSize: '1.2rem',
                        backgroundColor: '#00072D',
                        color: '#fff',
                        padding: '.5rem .7rem',
                        borderRadius:'100%',
                        transform: 'translateY(-80%)'
                    }}>
                    <Text><HiOutlineChatAlt2 /></Text>
                </Box>

                <Heading sx={{
                    fontSize: '1rem'
                }}>Direct Messages</Heading>
                <Text sx={{
                    fontSize: '.8rem'
                }}>Continue the conversation privately where no one can interfere</Text>
            </Flex>

            <Flex style={{
                width: '15rem',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '1px 1px 5px #00072D',
            }}>
                <Box style={{
                        height: '2.5rem',
                        width: '2.5rem',
                        fontSize: '1.2rem',
                        backgroundColor: '#00072D',
                        color: '#fff',
                        padding: '.5rem .7rem',
                        borderRadius:'100%',
                        transform: 'translateY(-80%)'
                    }}>
                    <Text><IoMdLock /></Text>
                </Box>

                <Heading sx={{
                    fontSize: '1rem'
                }}>Omnichannel</Heading>
                <Text sx={{
                    fontSize: '.8rem'
                }}>Whether you are on the mobile phone or laptop, enjoy Luta as you want.</Text>
            </Flex>
        </div>

        {/* Link */}
        <Flex sx={{
            alignItems: 'center',
            justifyContent: 'end',
            color: "#11AA8E",
            my: '2rem',
            fontSize: '.9rem',
            cursor: 'pointer'
        }}>
            <Text sx={{
                mr: '.5rem',
                textDecoration: 'underline'
            }}>See more</Text>
        </Flex>
    </Box>
  )
}

export default Features