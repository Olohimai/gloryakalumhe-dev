import React from 'react';
import Navbar from './Navbar';
function Header() {
   
    return (
        <div className='' >
            <Navbar />
            <div id='home' className='bg-yellow-100'>
                <div className='px-6 md:px-8 py-10 flex items-center justify-between space-x-8'>
                    <div className='max-w-xl pt-32 sm:py-48 md:py-20 text-left'>
                        <h1 className='text-xl font-bold tracking-tight text-black'> Hey There 👋 I am <br></br><span className='text-yellow-200 text-4xl'>Glory Akalumhe</span>  </h1>
                        <span className='mt-6 text-lg leading-8 text-gray-600'>A Professional Front-End Developer</span>
                        <p className='mt-6 text-base leading-8 text-gray-600'>I describe Myself as a Passionate Developer who loves coding. Aside from my job, I love to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects</p>
                    </div>
                    <div className='rounded-full border-2 border-yellow-200 bg-yellow-200 mt-20 md:flex hidden'>
                        <img className='flex-shrink-0 lg:max-w-md md:max-w-xs' src='images/PhotoRoom_20230813_83903 PM.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
