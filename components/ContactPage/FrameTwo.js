import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';
import Image from 'next/image';

const FrameTwo = () => {
  return (
    <div className='relative overflow-hidden w-full text-center pb-16'>
        <Box className='absolute top-0 left-0 -z-50'>
            <Image
                src={'/images/Rectangle 1177.svg'}
                alt="general"
                width="100"
                height="100"
                className='w-full h-full'
            />
        </Box>
      <Box className='mt-6 z-40'>
        <Text className='text-2xl md:text-3xl font-bold my-4 mx-10'>Or reach us through email</Text>
        <Box className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
            <Box sx={{
                width: '17rem',
                height: '17rem',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '1px 1px 5px #00072D',
            }} className='flex flex-col justift-center items-center bg-white color-[#080909]'>
                <Image 
                    src={'/images/Frame 1280.svg'}
                    alt="general"
                    width="50"
                    height="50"
                    className='my-4'
                />

                <Heading className='text-xl md:text-2xl font-bold mb-2'>General</Heading>
                <Text className='text-md text-left leading-0'>Submit a ticket to the support team on general topics.</Text>

                <Box className='flex justify-center items-center mt-3' sx={{
                    width: '100px',
                    h: '30px',
                    borderRadius: '8px',
                    bgColor: '#1AFFD5',
                    p: '2px 0',
                    cursor: 'pointer'
                }}>
                    <Image 
                        src={'/images/Vector.svg'}
                        alt={"vector"}
                        width='10'
                        height='10'
                    />
                </Box>
            </Box>

            <Box sx={{
                width: '17rem',
                height: '17rem',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '1px 1px 5px #00072D',
            }} className='flex flex-col justift-center items-center bg-white color-[#080909]'>
                <Image 
                    src={'/images/Frame 1280 (1).svg'}
                    alt="general"
                    width="50"
                    height="50"
                    className='my-4'
                />

                <Heading className='text-xl md:text-2xl font-bold mb-2'>Technical support</Heading>
                <Text className='text-md text-left leading-0'>Can’t find your answer elsewhere? Submit a ticket with out technical support team</Text>

                <Box className='flex justify-center items-center mt-3' sx={{
                    width: '100px',
                    h: '30px',
                    borderRadius: '8px',
                    bgColor: '#1AFFD5',
                    p: '2px 0',
                    cursor: 'pointer'
                }}>
                    <Image 
                        src={'/images/Vector.svg'}
                        alt={"vector"}
                        width='10'
                        height='10'
                    />
                </Box>
            </Box>

            <Box sx={{
                width: '17rem',
                height: '17rem',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '1px 1px 5px #00072D',
            }} className='flex flex-col justift-center items-center bg-white color-[#080909]'>
                <Image 
                    src={'/images/Frame 1280 (2).svg'}
                    alt="general"
                    width="50"
                    height="50"
                    className='my-4'
                />

                <Heading className='text-xl md:text-2xl font-bold mb-2'>Make a suggestion</Heading>
                <Text className='text-md text-left leading-0'>Suggest something you’ll like us to do or improve on. Get in touch with us.</Text>

                <Box className='flex justify-center items-center mt-3' sx={{
                    width: '100px',
                    h: '30px',
                    borderRadius: '8px',
                    bgColor: '#1AFFD5',
                    p: '2px 0',
                    cursor: 'pointer'
                }}>
                    <Image 
                        src={'/images/Vector.svg'}
                        alt={"vector"}
                        width='10'
                        height='10'
                    />
                </Box>
            </Box>

            <Box sx={{
                width: '17rem',
                height: '17rem',
                padding: '1rem',
                borderRadius: '16px',
                boxShadow: '1px 1px 5px #00072D',
            }} className='flex flex-col justift-center items-center bg-white color-[#080909]'>
                <Image 
                    src={'/images/Frame 1280 (3).svg'}
                    alt="general"
                    width="50"
                    height="50"
                    className='my-4'
                />

                <Heading className='text-xl md:text-2xl font-bold mb-2'>Joining Luta</Heading>
                <Text className='text-md text-left leading-0'>Is there anything you couldn’t fing in the FAQ section? Talk to our customer service to help.</Text>

                <Box className='flex justify-center items-center mt-3' sx={{
                    width: '100px',
                    h: '30px',
                    borderRadius: '8px',
                    bgColor: '#1AFFD5',
                    p: '2px 0',
                    cursor: 'pointer'
                }}>
                    <Image 
                        src={'/images/Vector.svg'}
                        alt={"vector"}
                        width='10'
                        height='10'
                    />
                </Box>
            </Box>
        </Box>
      </Box>
    </div>
  )
}

export default FrameTwo
