import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {Container , Nav , Navbar} from 'react-bootstrap'
import { UserContext } from '../App';
import '../App.css'
  



const Header = () => {

    const {state , dispatch} = useContext(UserContext)

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                <li className="nav-item">
                            <Link to='/Home' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" aria-current="page" href="#">Home</a></Link>
                        </li>
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
                            <Link to='/Logout' style={{ textDecoration: 'none', color: 'white' }}><a className="nav-link" href="#">Log Out</a></Link>
                        </li>
                </>
            )
        }else {
            return(
                <>
                <li className="nav-item nav-height">
                            <Link to='/Home' style={{ textDecoration: 'none', color: 'white' , fontSize: '30px' }}><a className="nav-link" aria-current="page" href="#">Home</a></Link>
                        </li>
                        <li className="nav-item nav-height">
                            <Link to='/About' style={{ textDecoration: 'none', color: 'white' ,fontSize: '30px'}}><a className="nav-link" aria-current="page" href="#">About</a></Link>
                        </li>
                        <li className="nav-item nav-height">
                            <Link to='/About' style={{ textDecoration: 'none', color: 'white' ,fontSize: '30px'}}><a className="nav-link" aria-current="page" href="#">Progress</a></Link>
                        </li>
                        <li className="nav-item nav-height">
                            <Link to='/Quiz' style={{ textDecoration: 'none', color: 'white',fontSize: '30px' }}><a className="nav-link" href="#">Quiz</a></Link>
                        </li>
                        <li className="nav-item nav-height">
                            <Link to='/Notes' style={{ textDecoration: 'none', color: 'white' ,fontSize: '30px'}}><a className="nav-link" href="#">Notes</a></Link>
                        </li>
                        <li className="nav-item nav-height">
                            <Link to='/Signup' style={{ textDecoration: 'none', color: 'white',fontSize: '30px' }}><a className="nav-link" href="#">Sign Up</a></Link>
                        </li>
                        <li className="nav-item nav-height">
                            <Link to='/Signup' style={{ textDecoration: 'none', color: 'white' ,fontSize: '30px'}}><a className="nav-link" href="#">Log In</a></Link>
                        </li>
                </>
            )
        }
    }

    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-height ">
            <div className="container-fluid ">
                <a className="navbar-brand"  href="#">Study-Ease</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <RenderMenu />


                    </ul>
                </div>
            </div>
        </nav>
        </>
        
    )
}

export default Header;