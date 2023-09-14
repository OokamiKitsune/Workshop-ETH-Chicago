import React from "react";
import { useState, useEffect, useContext } from "react";
import { Logo } from "../components/Logo";

// Quick Start page for the workshop
export default function WorkshopQuickStart() {

    return (
        <>
        
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <div className="flex flex-col items-center justify-center w-full h-screen text-gray-400">
                    <img src="https://ethchicago.xyz/logo.png" className="z-10 w-20 h-20" />
                <p className="z-10 text-2xl">🎉 Hello ETH Chicago 2023! 🎉</p>
                    
                    <p className="text-4xl font-bold text-center">Workshop Quest Quick Start</p>
                    <p className="text-sm font-bold text-center">If you see this page, you have successfully deployed Ceptor.</p>
                    <br></br>
                    <p className="text-sm font-bold text-center">To get started, select a quest from the navbar on the left.</p>
                </div>
            </div>
        </>

    )
}

