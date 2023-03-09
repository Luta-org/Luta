import { useState } from "react";
import AuthenticationNavbar from "@/components/AuthenticationNavbar";
import { Box } from "@chakra-ui/react";
import SignUpPage1 from "@/pages/SignUpPage1";

const signup = () => {
  return (
    <div>
      <AuthenticationNavbar />
      <Box>
        <SignUpPage1 />
      </Box>
    </div>
  );
};

export default signup;
