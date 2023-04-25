import React from "react"
import Image from "next/image";
import user from "../public/images/user.png";
import imagepost from "../public/images/imagepost.png";
import heart from "../public/images/heart.png";
import messages from "../public/images/messages.png";
import share from "../public/images/share.png";
import more from "../public/images/more.png";
import { Flex, Text } from "@chakra-ui/react";


const PostCard = () => {
    return (
      <div className="w-[500px]">
        <div className="gap-3 flex ">
          <Image src={user} alt="dp" />

          <div className="flex justify-between ">
            <div>
              <Text color={"black"}>The Ghetto Youth</Text>
              <Text color={"black"}>You</Text>
              <Text color={"black"}>30 Minutes ago</Text>
            </div>
            <div>
              <Text className="text-[#2F80ED]">Top Member</Text>
            </div>
          </div>
        </div>
        <div className="px-5">
          <Text color={"black"}>
            Lörem ipsum seling faska för eurorad, på hafönat. Tirade elektrostat
            din bevis nivis. Nyra vömång e-learning att ghosta. Fredsring iss
            sedan diligt sabelt. Telyrade parangar astrobyförade. Pernetik semir
            äga frågan loföre och lysybel. Ded epitos pesärar i divis som
            postsiv. Metrotes deciligt om ruvangen, förstärkt
          </Text>
          <p className="text-[#2F80ED]"> #Schoolisscam.</p>
        </div>
        <div className="mt-2">
          <Image src={imagepost} alt="image" />
        </div>
        <div className="flex justify-between mt-5" >
          <Flex>
            <Image src={heart} alt="image" />
            <div>
              <Text color={"black"}>10</Text>
            </div>
          </Flex>
          <Flex>
            <Image src={messages} alt="image" />
            <div>
              <Text color={"black"}>16</Text>
            </div>
          </Flex>
          <Flex>
            <Image src={share} alt="image" />
            <div>
              <Text color={"black"}>2</Text>
            </div>
          </Flex>
          <div>
            <Image src={more} alt="image" />      
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray my-[30px]"></div>
      </div>
    );
}

export default PostCard