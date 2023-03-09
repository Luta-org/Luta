import {
    Box
} from '@chakra-ui/react';
import Navbar from '@/components/Navbar';
import AboutFrame from '@/components/AboutPage/AboutFrame';
import OurApp from '@/components/AboutPage/OurApp';
import Mission from '@/components/AboutPage/Mission';
import Vision from '@/components/AboutPage/Vision';
import Invite from '@/components/AboutPage/Invite';
import Footer from '@/components/Footer';

const about = () => {
  return (
    <Box sx={{
      bgColor: '#fff'
    }}>
      {/* <Navbar /> */}
      <AboutFrame />
      <OurApp />
      <Mission />
      <Vision />
      <Invite />
      <Footer />
    </Box>
  )
}

export default about