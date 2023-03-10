import Navbar from "@/components/Navbar";
import FrameOne from "@/components/ContactPage/FrameOne";
import FrameTwo from "@/components/ContactPage/FrameTwo";
import Footer from "@/components/Footer";

const contact = () => {
  return (
    <div className="w-[100vw]">
      <Navbar 
        navColor={'#00072d'} 
        color={'transparent'}
        pad={'20px 30px 0 20px'}
        textColor={'#00072d'}
        borderStyle={'#1affd5 1px solid'} 
      />

      <FrameOne />
      <FrameTwo />
      <Footer />
    </div>
  )
}

export default contact
