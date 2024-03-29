import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import harmbugger from "../public/images/harmbugger.png";

const AuthenticationNavbar = () => {
    let Links = [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Features", link: "#" },
      { name: "Faqs", link: "#" },
      { name: "Contact Us", link: "/contact" },
    ];
      const [click, setClick] = useState(false);
      const [activeLink, setActiveLink] = useState("");
       const handleLinkClick = (link) => {
         setActiveLink(link);
       };
   
  return (
    <div className="w-full z-[999] sticky bg-white top-0 left-0 px-1 lg:px-2 md:px-0">
      <div className="md:flex items-center gap-[20px] md:w-full py-4 md:px-4 px-2">
        <div className="w-36 lg:w-24">
          <Link href={'/'}>
            <Image src="/Vector.svg" alt="luta logo" width="40" height="40" />
          </Link>
        </div>

        <div
          onClick={() => setClick(!click)}
          className="text-md absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {click ? (
            <Image src={harmbugger} alt="menu" />
          ) : (
            <Image src={harmbugger} alt="menu" />
          )}
        </div>

        <ul
          className={`md:flex md:items-center md:z-auto md:w-auto md:pb-0 md:static pb-12 absolute bg-white z-[-1] left-0 w-full pl-3 transition-all duration-300 ease-in ${
            click ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-[18px] md:my-0 my-7">
              <a
                href={link.link}
                className={`hover:text-gray-800  font-medium text-base duration-300 ${
                  activeLink === link.name
                    ? "text-gray-800"
                    : "text-gray-900 text-opacity-75"
                }`}
                onClick={() => handleLinkClick(link.name)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AuthenticationNavbar