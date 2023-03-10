import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import SectionA from '@/components/SectionA';
import About from '@/components/About';
import SectionB from '@/components/SectionB';
import SectionC from '@/components/SectionC';
import SectionD from '@/components/SectionD';
import Features from '@/components/Features';
import Artilce from '@/components/Artilce';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Luta</title>
        <meta name="description" content="Social Platform for Students" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      
      <Box>
          <Box style={{
          height: '90vh',  
          backgroundColor: '#00072D',
          padding: '20px 30px 0 30px'
        }}>
            {/* Navbar */}
            <Navbar color={'#fff'} navColor={'#fff'} />
            {/* First Section */}
            <SectionA />
          </Box>
        
        <Box py={'1rem'} style={{
          backgroundColor: '#fff',
          color: '#00072D',
          margin: '0 2rem'
        }}>
          {/* About */}
          <About />

          {/* First Section After tthe about component */}
          <SectionB />

          {/* Second section */}
          <SectionC />

          {/* Third section */}
          <SectionD />
        </Box>

        {/* Features Section */}
        <Features />

        {/* Article */}
        {/* <Artilce /> */}

        {/* Footer */}
        <Footer />
      </Box>
    </>
  )
}
