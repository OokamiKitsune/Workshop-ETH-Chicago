import React from 'react';
import Footer from './Footer';
import NavbarMdUp from './NavbarMdUp';
import NavbarSmUp from './NavbarSmUp';
import Meta from './Meta';
import Image from 'next/image';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <NavbarMdUp />
      <NavbarSmUp />
      <main>
      <div className='fixed top-0 h-screen w-screen'>
            <Image
              src="/images/CREATE-midpage/midPageImage.png"
              width={1000}
              height={1000}
              alt="midPage"
              className="object-cover w-full h-full -z-10 opacity-25"
            />
          </div>
        {children}
      </main>
      <Footer />

    </>
  );
};

export default Layout;
