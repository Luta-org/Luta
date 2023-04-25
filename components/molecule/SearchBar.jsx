import React from "react"
import search from "../../public/images/search.png";
import Image from "next/image";


const SearchBar = () =>{
    return (
      <div class="flex items-center justify-center">
        <div class="flex items-center border border-[#C2C3C8] rounded-md">
          <input
            class="py-2 px-4 w-[300px] rounded-l-md text-black"
            type="text"
            placeholder="Search Luta"
          />
          <div className="border border-l-[#C2C3C8]">
            <button
              class="py-2 px-4 bg-gray-800 text-white rounded-r-md cursor-pointer"
              type="submit"
            >
              <Image src={search} alt="search icon" className="w-[20px]" />
            </button>
          </div>
        </div>
      </div>
    );
}

export default SearchBar