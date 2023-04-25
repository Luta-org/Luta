import React from "react"
import HomepageLayout from "../layout/HomepageLayout";
import { Box, Flex, Text } from "@chakra-ui/react";
import PostCard from "@/components/PostCard";


const Home = () => {
    return (
      <HomepageLayout>
        <Box className="w-[500px] px-[15px]">
          <Text>Whats happening?</Text>
          <div>
            <input
              class="py-2 px-4 w-full rounded-md text-black border border-[#C2C3C8]"
              type="text"
              placeholder="Search Luta"
            />
          </div>
          <div className="flex justify-end mt-5">
            <button class="py-2  px-10 bg-red-800 text-white rounded-full cursor-pointer">
              Post a lut
            </button>
          </div>
          <h1 className="text-[20px]">Luts Feeds </h1>
          <div className="mt-2">
            <PostCard />
            <PostCard />
          </div>
        </Box>
      </HomepageLayout>
    );
}

export default Home;