import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../../logo.jpg'

const Navbar = () => {
    return (
        <NavbarContainer>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="add-articles" className="nav-link">Add Article</Link>
                        </li>
                        
                    </ul>
                </div>
        </nav>
        </NavbarContainer>
    )
}

export default Navbar


// Main Navbar
const NavbarContainer = styled.div`
    background: var(--dark-green);

    .nav-link{
        color:#fff !important;
        &:hover{
            background:var(--light-green);
        }
    }

    .navbar-brand{
        img{
            border-radius:50%;
        }
    }
`