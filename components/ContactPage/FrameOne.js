import {
    Box,
    Heading,
    Text
} from '@chakra-ui/react';
import styles from "styles/Section.module.css";

const FrameOne = () => {
  return (
    <div className={`${styles.contact} ${'h-[70vh] w-[100vw] bg-[#000] text-white flex flex-col justify-center items-center'}`}>
      <Heading className='text-2xl md:text-3xl font-bold mb-4'>Contact Us</Heading>
      <Text className='w-[20rem] md:w-[32rem] text-center text-md md:text-xl px-4'>Need to get in touch with us? Either fill out the form below with your inquiry or find the department email you’ll like to contact below.</Text>

      <Box className='flex items-center my-4'>
        <Box sx={{
            w: '2rem',
            h: '2px',
            bgColor: '#fff',
            marginRight: '1.5rem'
        }}></Box>
        <Text>Or call our help line</Text>
        <Box sx={{
            w: '2rem',
            h: '2px',
            bgColor: '#fff',
            marginLeft: '1.5rem'
        }}></Box>
      </Box>

      <Text className='text-xl'>+2349162072203</Text>
    </div>
  )
}

export default FrameOne
