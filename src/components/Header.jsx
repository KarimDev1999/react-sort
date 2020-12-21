import React, { Fragment } from 'react';

import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className="header">

            <nav className="navbar navbar-dark bg-dark">
                <div>
                    <Link to='/' className="navbar-brand">Worker List</Link>
                    <Link to='/info' className="navbar-brand">Info</Link>
                </div>
            </nav>
        </div>
    )
}

export default Header
