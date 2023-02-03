import React from 'react';
import Navbar from './Navbar';
function Header() {
    return (
        <div className='' >
            <Navbar />
            <div id='home' className='bg-yellow-100'>
                <div className='px-6 lg:px-8 py-10'>
                    <div className='mx-auto max-w-4xl py-32 sm:py-48 lg:py-20 text-left'>
                        <h1 className='text-4xl font-bold tracking-tight text-black sm:text-6xl'> Hi, I am <br></br><span className='text-yellow-200'>Glory Akalumhe</span>  </h1>
                        <span className='mt-6 text-lg leading-8 text-gray-600'>A Front-End Developer based in the Uk.</span>
                        <p className='mt-6 text-base leading-8 text-gray-600'>I describe Myself as a Passionate Developer who loves coding, open source, and the web platform . Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
