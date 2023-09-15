import Image from 'next/image';
import { Logo } from './Logo';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import WalletConnectButton from './WalletConnectButton';
import DiceDashboard from './DiceDashboard';
import { FaInfo, FaStumbleuponCircle } from 'react-icons/fa';


export default function NavbarMdUp() {
  const [navMenuVisible, setNavMenuVisible] = useState(true);
  // Define the toggleNavMenu function
  const toggleNavMenu = () => {
    setNavMenuVisible(!navMenuVisible);
  };

  return (
    <>
      {/* Large screens */}
      <div className='hidden md:block'>
        <nav
          className={`${navMenuVisible ? `w-48` : 'w-12'
            } h-12 fixed z-20 md:h-full left-0 bg-black bg-opacity-80`}
        >
          <div

            className='bg-grey-800 w-8 h-8 rounded-full absolute -right-4 top-6 cursor-pointer'
            onClick={toggleNavMenu}>
            <div className="flex items-center justify-center">
              <FaStumbleuponCircle size={36} /> {/* Adjust the size as needed */}
            </div>
          </div>

          {navMenuVisible ? (
            <>
              <div className='w-full flex flex-col ml-6 mt-6'>
                <a href='/'>
                <Image
                  src='/logo.png'
                  alt=''
                  width={50}
                  height={50}
                  className='mb-6'
                />
                </a>
                <p className='text-white text-2xl font-bold mb-6'>
                  <p>Select your quest</p>
                </p>
                {/* TODO: Check all hrefs */}
                <Link href='/games'>Games</Link>
                <Link href='/tech'>Tech </Link>
                <Link href='/art'>Art </Link>
                

              </div>
              <div className='fixed bottom-6 ml-6'>
              </div>
            </>
          ) : null}
        </nav>
      </div>
    </>
  );
}
