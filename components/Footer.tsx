import React from "react";
import Link from "next/link";
import { Logo } from "../components/Logo";
import Image from 'next/image';

const DiscordUrl = "https://discord.gg/kPC8GMK5";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4 z-20">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center">

                    <p className="mt-2">
                        <Image
                            src='/logo.png'
                            alt=''
                            width={50}
                            height={50}
                            className='mb-6'
                        />
                    </p>
                    Want to begin your quest with the Ceptor Club community?
                    <a href="https://forms.gle/7gEVtJF3hUgrNrhP6">Join Ceptor</a>
                </div>
            </div>
        </footer >
    );
}
