import React from 'react';
import './navbar.css';
import imagelogo from "../../images/argos-logo-claro.png";
import { Link } from 'react-router-dom';

// Navbar similar al del home pero con la unica opcion de volver al home 
export const NavbarBack = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src={imagelogo} alt="argos-logo" width="120px"></img></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                        <Link className="nav-link text-light fs-4 " aria-current="page" to="/">Home</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
