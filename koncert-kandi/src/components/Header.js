import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary d-flex bd-highlight mb-3 justify-content-between">
                <NavLink to={'/'}>
                    <div className="navbar-brand">
                        <img className="navbar-brand" src="./assets/koncert_kandi_logo.png" width="100" height="100" alt="Koncert Kandi Logo" />
                        Koncert Kandi
                    </div>
                </NavLink>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <NavLink to={'/update-profile'}>
                            <li className="nav-item active">
                                <div className="nav-link" href="#">Update Profile <span className="sr-only">(current)</span></div>
                            </li>            
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header