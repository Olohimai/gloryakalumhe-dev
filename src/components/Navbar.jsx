import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    let Links = [
        { name: "Home", link: "home" }, // Use the target element's ID here
        { name: "Skills", link: "skills" }, // Use the target element's ID here
        { name: "Projects", link: "project" }, // Use the target element's ID here
        { name: "About Me", link: "about-me" }, // Use the target element's ID here
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-yellow-100 py-4 md:px-10 px-7'>
                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1 text-yellow-200'>
                    <span className='rounded-full border-2 p-2 border-yellow-200'>GA</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-yellow-100 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 pt-8' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li className='md:ml-8 md:my-0 my-7 font-semibold cursor-pointer' key={link.name}>
                                <Link
                                    to={link.link}
                                    smooth={true}
                                    spy={true}
                                    offset={-70}
                                    duration={500}
                                    className='text-gray-800 duration-500'
                                    onClick={() => setOpen(false)} // Close the menu
                                >
                                    {link.name}
                                </Link>
                            </li>))
                    }
                    <button className='btn bg-yellow-200 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>View Resume</button>
                </ul>
                {/* button */}
            </div>
        </div>
    );
};

export default Navbar;