import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <nav className="navbar navbar-expand-lg  nav-pills nav-fill d-flex  mb-3 justify-content-between">
                <NavLink to={'/'}>
                    <div className="navbar-brand brand">
                        <img className="navbar-brand" src="./assets/koncert_kandi_icon_blue.png" width="80" height="80" alt="Koncert Kandi Logo" />
                        <h3 id="nav-title">Koncert Kandi</h3>
                    </div>
                </NavLink>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto ">
                        <NavLink to={'/update-profile'}>
                            <li className="nav-item">
                                <div className="nav-link ">Update Profile <span className="sr-only">(current)</span></div>
                            </li>            
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header