import Image from 'next/image';
import { 
    Box 
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box>
        {/* Logo */}
        <Box>
            <Image 
            src="/Vector.svg"
            alt="luta logo"
            width="100"
            height="24"
            priorty
            />
        </Box>
    </Box>
  )
}

export default Navbar