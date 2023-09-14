// This is a custom 404 page that will be rendered if a route doesn't exist or if an error occurs.
import Link from 'next/link';
import Image from 'next/image';

export default function Four() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <Image
          src='/logo.png'
          alt='Ceptor Club Logo'
          width={100}
          height={100}
          className='mx-auto my-auto mb-6 animate-pulse'
        />
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">
          Uh-oh... 404 This page doesn't exist.
        </h1>
        <p className="text-lg text-gray-600 mb-8 animate-fadeIn">
          It seems you've ventured into uncharted territory.
        </p>
        <Link href="/" className="underline hover:opacity-80 transition-opacity">
          Return home
        </Link>
      </div>
    </div>
  );
}
