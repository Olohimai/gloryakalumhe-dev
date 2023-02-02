import React from 'react';
import { Link } from 'react-scroll';
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  p-4 ">
                <div className="container-fluid fixed-top bg-white py-3 px-5">
                    <Link to="" className="navbar-brand" href="#">Glory-Akalumhe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="" className="nav-link active" aria-current="page" href="#">Home</Link>
                            <Link to="skills" className="nav-link" href="#">Skills</Link>
                            <Link to="project" className="nav-link" href="#">Project</Link>
                            <Link to="about-me" className="nav-link" href='#'>About Me</Link>
                        </div>
                    </div>
                    <div className='d-flex'>
                        < Link to="" className="nav-link border rounded-pill p-2" href='#'>View Resume</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
