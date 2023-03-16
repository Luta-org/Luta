import {
  Box,
  Button,
  Flex,
  Center,
  Text,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, React } from "react";
import line from "../public/images/line.png";
import Group from "../public/images/Group.png";
import checkpoint3 from "../public/images/checkpoint3.png";
import Image from "next/image";
import AuthenticationNavbar from "@/components/AuthenticationNavbar";
import PasswordSuccessful from "@/components/PasswordSuccessful";

const forgotpassword = () => {
  const linkStyle = {
    textDecoration: "none",
  };
  const [showAddNewNotePopup, setShowAddNewNotePopup] = useState(false);

  return (
    <div>
      <PasswordSuccessful isOpen={showAddNewNotePopup} />
      <AuthenticationNavbar />
      <div>
        <div className="flex flex-col text-left pt-5  justify-center lg:px-10 px-5 md:px-0 w-full  md:w-[60%] md:m-auto lg:w-[45%] lg:m-auto ">
          <div>
            <Center>
              <div>
                <Image src={Group} alt="GroupLogo" />
              </div>
            </Center>

            <h1 className="text-[#0E0008] text-[30px] md:text-[48px] text-center font-bold">
              Reset Password
            </h1>
            <p className=" font-normal text-base md:text-[20px] text-center mt-2 text-[#575757]">
              Enter your registered phone number
            </p>
          </div>
          <div>
            <div className="justify-center mt-10">
              <Image src={checkpoint3} alt="fpp" />
            </div>
          </div>
          <div>
            <div className="hidden  md:block absolute top-[60px] left-0 ">
              <Image src={line} alt="line" />
            </div>
          </div>

          <div className="flex flex-col w-full lg:w-full mt-5">
            <h1 className=" text-base font-normal text-[#0E0008]">Password</h1>
            <input
              className="border border-[#C2C3C8] px-2 py-5 rounded-md mt-2"
              type="text"
              placeholder="******"
            />
            <div className="flex justify-between text-[10px] md:text-[14px]">
              <Text color={"#00072D"}>Uppercase</Text>
              <Text color={"#00072D"}>Lowercase</Text>
              <Text color={"#ADADAD"}>Special character</Text>
              <Text color={"#00072D"}>Number</Text>
              <Text color={"#00072D"}>Min 8 characters</Text>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-full mt-8">
            <h1 className=" md:text-[20px] text-[15px] font-normal text-[#0E0008]">
              Confirm Password
            </h1>
            <input
              className="border border-[#C2C3C8] px-2 py-5 rounded-md mt-2"
              type="text"
              placeholder="******"
            />
          </div>

          <Center>
            <Button
              w={"320px"}
              py={10}
              color={"black"}
              borderRadius={"100px"}
              borderColor={"#1AFFD5"}
              backgroundColor={"#1AFFD5"}
              outline={"none"}
              cursor="pointer"
              mt="35px"
              onClick={() => setShowAddNewNotePopup(true)}
            >
              <Text fontSize={"25px"}>Set Password</Text>
            </Button>
          </Center>
        </div>
      </div>
    </div>
  );
};

export default forgotpassword;
