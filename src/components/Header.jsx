import React from 'react';
import Navbar from './Navbar';
function Header() {
    return (
        <div id="main">
            <Navbar />
            <div>
                <div className='py-5 container text-sm-center text-md-start mx-auto mt-5'>
                    <h1 className=''> Hi, I am <span className='text-color fw-bolder'>Glory Akalumhe</span>  </h1>
                    <span className='fs-2'>A Front-End Developer based in the Uk.</span>
                    <p className='w-75 fs-5'>I describe myself as a passionate developer who loves coding, open source, and the web platform . Aside from my job, I like to create and contribute to open source projects. That helps me to learn a ton of new stuff, grow as a developer and support other open source projects</p>

                </div>
            </div>
        </div>
    )
}

export default Header
