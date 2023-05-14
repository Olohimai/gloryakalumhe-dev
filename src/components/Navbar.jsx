import React from 'react';
import { Link } from 'react-scroll';
function Navbar() {
    return (
        <div className='px-6 py-6 lg:px-8 fixed top-0  inset-x-0 bg-yellow-100'>
            <nav className="flex items-center justify-between">
                <div className="flex lg:flex-1">
                    <Link to="" 
                        className="font-bold text-3xl text-yellow-200">Glory-Akalumhe.</Link>
                </div>
                <div className='flex lg:hidden'>
                    <button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" type="button" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""></span>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="home"
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}
                        className="text-sm font-semibold cursor-pointer leading-6 text-gray-900" aria-current="page">Home</Link>
                    <Link to="skills"
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}
                        className="text-sm font-semibold cursor-pointer leading-6 text-gray-900">Skills</Link>
                    <Link to="project"
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}
                        className="text-sm font-semibold cursor-pointer leading-6 text-gray-900">Project</Link>
                    <Link to="about-me"
                        smooth={true}
                        spy={true}
                        offset={-70}
                        duration={500}
                        className="text-sm font-semibold cursor-pointer leading-6 text-gray-900">About Me</Link>
                    <a href="https://github.com/Olohimai"
                        className="text-sm font-semibold cursor-pointer leading-6 text-gray-900">Github Account</a>
                </div>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                    < Link to="" className="bg-yellow-200 text-sm font-semibold cursor-pointer leading-6 text-white border rounded-full py-2 px-3">View Resume</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
