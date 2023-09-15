import React from "react";
import Layout from "../components/Layout";
import WorkshopQuickStart from "../components/WorkshopQuickStart";
import Image from 'next/image';

export default function Test() {
    
    return(
        <>
        <Layout>
        
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

          <div className="flex flex-col justify-center items-center">
            <div className="z-10 flex w-full justify-center">
              <div className=" z-10">
                <WorkshopQuickStart />
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
    )

}