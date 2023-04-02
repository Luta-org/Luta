import {
    Box
} from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import AboutFrame from '@/components/AboutPage/AboutFrame';
import OurApp from '@/components/AboutPage/OurApp';
import Mission from '@/components/AboutPage/Mission';
import Vision from '@/components/AboutPage/Vision';
import Team from '@/components/AboutPage/Team';
import Invite from '@/components/AboutPage/Invite';
import Footer from '@/components/Footer';

const about = () => {
  return (
    <Box sx={{
      bgColor: '#fff'
    }} className='transition-all duration-300 ease-in overflow-x-hidden'>
      <Navbar
        navColor={'#00072d'} 
        color={'transparent'}
        pad={'20px 30px 0 20px'} 
        borderStyle={'1px solid #1affd5'}
      />
      <AboutFrame />
      <OurApp />
      <Mission />
      <Vision />
      <Team />
      <Invite />
      <Footer />
    </Box>
  )
}

export default about