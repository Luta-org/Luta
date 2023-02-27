import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import SectionA from '@/components/SectionA';

export default function Home() {
  return (
    <>
      <Head>
        <title>Luta</title>
        <meta name="description" content="Social Platform for Students" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      
      <Box style={{
        backgroundColor: '#00072D',
        padding: '20px 30px 0 30px'
      }}>
        {/* Navbar */}
        <Navbar />
        {/* First Section */}
        <SectionA />
      </Box>
    </>
  )
}
