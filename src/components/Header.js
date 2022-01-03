import React from 'react';
import { Link } from 'react-router-dom';
import {Container , Nav , Navbar} from 'react-bootstrap'




const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Study-Ease</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/About' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" aria-current="page" href="#">About</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Notes' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" href="#">Notes</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Quiz' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" href="#">Quiz</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/Signup' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" href="#">Sign Up</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
        
    )
}

export default Header;