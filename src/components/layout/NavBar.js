import React from 'react'
import {Link, NavLink} from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <Link className="navbar-brand" to="/">ReactJs</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="/user/add" className="ml-md-5 btn btn-outline-light">Add User</Link>
            </div>
        </nav>
    )
}
